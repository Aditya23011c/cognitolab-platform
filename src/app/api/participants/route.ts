import { NextResponse } from 'next/server';
import { db } from '@/db';
import { participant } from '@/db/schema';

export async function GET() {
  try {
    const participants = await db.select().from(participant);
    return NextResponse.json(participants);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch participants' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newParticipant = await db.insert(participant).values({
      email: body.email,
      age: body.age,
      gender: body.gender,
      country: body.country,
      participantCode: body.participantCode || `P${Date.now()}`,
      createdAt: new Date().toISOString(),
    }).returning();
    
    return NextResponse.json(newParticipant[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create participant' }, { status: 500 });
  }
}
