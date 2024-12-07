import { connectToDatabase } from '@/lib/db/connect';
import { Visitor } from '@/lib/db/models/Visitor';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    let visitor = await Visitor.findOne({});
    
    if (!visitor) {
      visitor = await Visitor.create({ count: 1 });
    } else {
      visitor.count += 1;
      visitor.lastUpdated = new Date();
      await visitor.save();
    }
    
    return NextResponse.json({ count: visitor.count });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update visitor count' }, { status: 500 });
  }
}

export async function POST() {
  try {
    await connectToDatabase();
    const visitor = await Visitor.findOne({});
    return NextResponse.json({ count: visitor?.count || 0 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get visitor count' }, { status: 500 });
  }
}
