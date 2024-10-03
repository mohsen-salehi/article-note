// src/app/api/articles/[id]/route.ts
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const article = db.prepare('SELECT * FROM articles WHERE id = ?').get(params.id);
    if (!article) {
        return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    return NextResponse.json(article);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const result = db.prepare('DELETE FROM articles WHERE id = ?').run(params.id);
    if (result.changes === 0) {
        return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Article deleted successfully' });
}