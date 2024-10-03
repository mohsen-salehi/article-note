import { Suspense } from 'react';
import db from '@/lib/db';
import DeleteButton from '@/app/components/DeleteButton';
import ArticleContent from '@/app/components/ArticleContent';

type articleType = {
    id: number;
    title: string;
    content: string;
}

async function getArticle(id: string) {
    const article  = db.prepare('SELECT * FROM articles WHERE id = ?').get(id) as articleType;
    return article ? { ...article, id: article.id.toString() } : null;
}

export default async function ArticleView({ params }: { params: { id: string } }) {
    const article = await getArticle(params.id);
    if (!article) {
        return <div className="text-center text-red-500">مقاله یافت نشد</div>;
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-2xl font-bold mb-4">{article.title}</div>
            <Suspense fallback={<div>در حال بارگذاری محتوای مقاله...</div>}>
                <ArticleContent content={article.content} />
            </Suspense>
            <DeleteButton articleId={article?.id} />
        </div>
    );
}