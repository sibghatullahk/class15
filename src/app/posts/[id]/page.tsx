// File: app/posts/[id]/page.tsx
// Fetching single post by ID in a dynamic route
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Fetching a single post by ID
const fetchPostById = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) {
    return null;
  }
  return response.json();
};

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await fetchPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
      <Link href="/posts" className="text-blue-600 hover:underline mt-4 inline-block">
        Back to Posts
      </Link>
    </div>
  );
};

export default PostPage;