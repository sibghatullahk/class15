import Link from "next/link";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const PostsPage = async () => {
  const posts = await fetchPosts();


  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="border p-4 rounded-md shadow-sm">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <Link href={`/posts/${post.id}`} className="text-blue-600 hover:underline">
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;