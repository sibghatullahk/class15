// src/app/users/[id]/page.server.tsx
"use server"; // This line marks the component as a Server Component

import { notFound } from "next/navigation";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export default async function SingleUserPage({ params }: { params: { id: string }; }) {
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
      {/* ... rest of the user details ... */}
    </article>
  );
}