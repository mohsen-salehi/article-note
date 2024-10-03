// src/app/components/DeleteButton.tsx
'use client';

import { useRouter } from 'next/navigation';

export default function DeleteButton({ articleId }: { articleId: string }) {
    const router = useRouter();

    const handleDelete = async () => {
        const response = await fetch(`/api/articles/${articleId}`, { method: 'DELETE' });
        if (response.ok) {
            router.push('/articles');
        } else {
            alert('Failed to delete article');
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
            Delete Article
        </button>
    );
}