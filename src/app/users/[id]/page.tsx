"use client";

import { notFound } from "next/navigation";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export default async function SingleUserPage({
  params,
}: {
  params: { id: string };
}) {
  // Make sure the component is `async`
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  
  if (!res.ok) {
    return notFound();
  }

  const user: User = await res.json();
  if (!user || !user.id) {
    return notFound();
  }

  return (
    <article className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <p className="mb-2 text-gray-600">@{user.username}</p>
      <p className="mb-2 text-blue-600 underline">{user.email}</p>
      <p className="mb-2">Phone: {user.phone}</p>
      <p className="mb-2">Website: {user.website}</p>
    </article>
  );
}