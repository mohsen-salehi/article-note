'use client';

import { useEffect, useState } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

export default function ArticleContent({ content }: { content: string }) {
    const [highlightedContent, setHighlightedContent] = useState(content);

    useEffect(() => {
        const highlighted = content.replace(
            /```js([\s\S]*?)```/g,
            (match, code) => `<pre><code class="hljs language-javascript">${hljs.highlight(code.trim(), { language: 'javascript' }).value}</code></pre>`
        );
        setHighlightedContent(highlighted);
    }, [content]);

    return (
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: highlightedContent }} />
    );
}