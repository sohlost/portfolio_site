import { connectToDatabase } from '@/lib/db/connect';
import { BlogInteraction } from '@/lib/db/models/BlogInteraction';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { slug } = await request.json();
    
    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    await connectToDatabase();
    let interaction = await BlogInteraction.findOne({ slug });
    
    if (!interaction) {
      interaction = await BlogInteraction.create({ slug, likes: 1 });
    } else {
      interaction.likes += 1;
      interaction.lastLiked = new Date();
      await interaction.save();
    }
    
    return NextResponse.json({ likes: interaction.likes });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update likes' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    await connectToDatabase();
    const interaction = await BlogInteraction.findOne({ slug });
    return NextResponse.json({ likes: interaction?.likes || 0 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get likes' }, { status: 500 });
  }
}
