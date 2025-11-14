import { NextResponse } from 'next/server';
import { db } from '@/db';
import { trial, session, experiment } from '@/db/schema';
import { eq, and, sql } from 'drizzle-orm';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const experimentId = searchParams.get('experimentId');
    
    if (!experimentId) {
      return NextResponse.json({ error: 'experimentId is required' }, { status: 400 });
    }

    // Get all trials for this experiment
    const experimentSessions = await db
      .select()
      .from(session)
      .where(eq(session.experimentId, parseInt(experimentId)));
    
    const sessionIds = experimentSessions.map(s => s.id);
    
    if (sessionIds.length === 0) {
      return NextResponse.json({
        meanRT: 0,
        accuracy: 0,
        totalTrials: 0,
        participantCount: 0,
      });
    }

    const trials = await db
      .select()
      .from(trial)
      .where(sql`${trial.sessionId} IN ${sessionIds}`);

    // Calculate statistics
    const validTrials = trials.filter(t => t.reactionTime !== null);
    const meanRT = validTrials.length > 0 
      ? Math.round(validTrials.reduce((sum, t) => sum + (t.reactionTime || 0), 0) / validTrials.length)
      : 0;
    
    const accurateTrials = trials.filter(t => t.accuracy === true);
    const accuracy = trials.length > 0 
      ? Math.round((accurateTrials.length / trials.length) * 100 * 10) / 10
      : 0;

    return NextResponse.json({
      meanRT,
      accuracy,
      totalTrials: trials.length,
      participantCount: experimentSessions.length,
      trials: trials,
    });
  } catch (error) {
    console.error('Analytics error:', error);
    return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 });
  }
}
