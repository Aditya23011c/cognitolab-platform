import { NextResponse } from 'next/server';
import { db } from '@/db';
import { trial } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('sessionId');
    
    if (sessionId) {
      const trials = await db.select().from(trial).where(eq(trial.sessionId, parseInt(sessionId)));
      return NextResponse.json(trials);
    }
    
    const trials = await db.select().from(trial);
    return NextResponse.json(trials);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch trials' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newTrial = await db.insert(trial).values({
      sessionId: body.sessionId,
      trialNumber: body.trialNumber,
      trialType: body.trialType,
      stimulus: body.stimulus,
      response: body.response,
      reactionTime: body.reactionTime,
      accuracy: body.accuracy,
      timestamp: new Date().toISOString(),
      metadata: body.metadata,
    }).returning();
    
    return NextResponse.json(newTrial[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create trial' }, { status: 500 });
  }
}
