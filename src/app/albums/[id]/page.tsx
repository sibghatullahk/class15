"use client"; // Mark this as a client-side component

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the type for Album
interface Album {
  userId: number;
  id: number;
  title: string;
}

export default function SingleAlbumPage() {
  const { id } = useParams(); // Fetch dynamic route parameter
  const [album, setAlbum] = useState<Album | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch album data based on dynamic route id
      fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then((res) => res.json())
        .then((data) => setAlbum(data));
    }
  }, [id]);

  if (!album) {
    return <div>Album not found</div>; // Show a 404-like message if album is not found
  }

  return (
    <div>
      <h1>{album.title}</h1>
      <p>Album ID: {album.id}</p>
      <p>User ID: {album.userId}</p>
    </div>
  );
}