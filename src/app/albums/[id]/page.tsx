import { notFound } from "next/navigation";

interface Album {
  userId: number;
  id: number;
  title: string;
}

export default async function SingleAlbumPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}`);
  if (!res.ok) {
    return notFound();
  }

  const album: Album = await res.json();
  if (!album?.id) {
    return notFound();
  }

  return (
    <article className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">{album.title}</h1>
      <p className="text-gray-600">Album ID: {album.id}</p>
      <p className="text-gray-600">User ID: {album.userId}</p>
    </article>
  );
}