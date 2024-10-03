// src/app/articles/page.tsx
import Link from 'next/link';
import db from '@/lib/db';

type articleType = {
    id: number;
    title: string;
    content: string;
    created_at: Date;
}

export default function ArticleList() {
    const articles = db.prepare('SELECT id, title, created_at FROM articles ORDER BY created_at DESC').all() as articleType[];

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-2xl font-bold mb-4">Articles</div>
            <ul className="space-y-2">
                {articles.map((article) => (
                    <li key={article.id} className="border-b pb-2">
                        <Link href={`/articles/${article.id}`} className="text-blue-500 hover:underline">
                            {article.title}
                        </Link>
                        <span className="text-sm text-gray-500 ml-2">
              {new Date(article.created_at).toLocaleDateString()}
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}