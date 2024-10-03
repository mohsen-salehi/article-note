// src/app/api/articles/route.ts
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
    const articles = db.prepare('SELECT id, title, created_at FROM articles ORDER BY created_at DESC').all();
    return NextResponse.json(articles);
}

export async function POST(request: Request) {
    const { title, content } = await request.json();
    const insert = db.prepare('INSERT INTO articles (title, content) VALUES (?, ?)');
    const result = insert.run(title, content);
    return NextResponse.json({ id: result.lastInsertRowid }, { status: 201 });
}