import { notFound } from "next/navigation";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }


export default async function SinglePostPage({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  if (!res.ok) {
    // handle invalid IDs or server issues
    return notFound();
  }

  const post: Post = await res.json();
  if (!post?.id) {
    return notFound();
  }

  return (
    <article className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 mb-4">{post.body}</p>
      <p className="text-sm text-gray-500">User ID: {post.userId}</p>
    </article>
  );
}