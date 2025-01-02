"use client"; // Mark this as a client-side component

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the type for Post
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function SinglePostPage() {
  const { id } = useParams(); // Fetch dynamic route parameter
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch post data based on dynamic route id
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  if (!post) {
    return <div>Post not found</div>; // Show a 404-like message if post is not found
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>Post ID: {post.id}</p>
      <p>User ID: {post.userId}</p>
    </div>
  );
}