import Link from "next/link";

// Next.js fetch is available in Server Components (with streaming etc.)
export default async function PostsPage() {
  // 1) Fetch all posts from the JSONPlaceholder API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    
  });
  if (!res.ok) {
    // Handle errors
    throw new Error("Failed to fetch posts");
  }
  const posts = await res.json();

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post: any) => (
          <div key={post.id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700 mt-2 line-clamp-2">{post.body}</p>
            <Link href={`/posts/${post.id}`}>
              <span className="inline-block mt-4 text-blue-500 underline cursor-pointer">
                Read More
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}