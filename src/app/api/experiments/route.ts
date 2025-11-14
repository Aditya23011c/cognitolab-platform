import { NextResponse } from 'next/server';
import { db } from '@/db';
import { experiment } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const experiments = await db.select().from(experiment);
    return NextResponse.json(experiments);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch experiments' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newExperiment = await db.insert(experiment).values({
      researcherId: body.researcherId,
      title: body.title,
      description: body.description,
      status: body.status || 'draft',
      configuration: body.configuration,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }).returning();
    
    return NextResponse.json(newExperiment[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create experiment' }, { status: 500 });
  }
}