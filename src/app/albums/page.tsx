import Link from "next/link";
interface AlbumsPage {
    userId: number;
    id: number;
    title: string;
  }

export default async function AlbumsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!res.ok) {
    throw new Error("Failed to fetch albums");
  }
  const albums = await res.json();

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">All Albums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {albums.map((album: any) => (
          <div key={album.id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{album.title}</h2>
            <Link href={`/albums/${album.id}`}>
              <span className="inline-block mt-4 text-blue-500 underline cursor-pointer">
                View Details
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}