import { notFound } from "next/navigation";

// Define the type for the album
interface Album {
  userId: number;
  id: number;
  title: string;
}

export default async function SingleAlbumPage({
  params,
}: {
  params: { id: string }; // Ensure params is of type { id: string }
}) {
  // Ensure that `params.id` is used asynchronously with fetch
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}`);
  
  if (!res.ok) {
    return notFound(); // Return 404 if the album is not found
  }

  const album: Album = await res.json(); // Fetch the album by ID
  
  if (!album || !album.id) {
    return notFound(); // If the album doesn't exist, return 404
  }

  return (
    <article className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">{album.title}</h1>
      <p className="text-gray-600">Album ID: {album.id}</p>
      <p className="text-gray-600">User ID: {album.userId}</p>
    </article>
  );
}