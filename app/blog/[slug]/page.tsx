import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();
  return (
    <main className="container mx-auto px-4 py-16 prose dark:prose-invert">
      <h1>{post.data.title}</h1>
      <article>
        <pre className="whitespace-pre-wrap">{post.content}</pre>
      </article>
    </main>
  );
}