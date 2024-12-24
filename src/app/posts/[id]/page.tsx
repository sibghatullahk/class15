import { notFound } from "next/navigation";

const fetchPostById = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!response.ok) return null;
  return response.json();
};

type PostPageProps = {
  params: {
    id: string;
  };
};

const PostPage = async ({ params }: PostPageProps) => {
  const post = await fetchPostById(params.id);

  if (!post) {
    notFound();
  }

  // JSX syntax below
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default PostPage;