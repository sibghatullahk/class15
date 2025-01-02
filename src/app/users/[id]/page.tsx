"use client"; // Mark this as a client-side component

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the type for User
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export default function SingleUserPage() {
  const { id } = useParams(); // Fetch dynamic route parameter
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch user data based on dynamic route id
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [id]);

  if (!user) {
    return <div>User not found</div>; // Show a 404-like message if user is not found
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>@{user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}