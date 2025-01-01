
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4 mt-4">Welcome to the JSONPlaceholder App</h1>
      <p className="mb-8">
        Explore various resources from <Link href="https://jsonplaceholder.typicode.com" target="_blank" rel="noreferrer" className="text-blue-500 underline">JSONPlaceholder</Link>.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/posts"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          View Posts
        </Link>
        <Link
          href="/albums"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          View Albums
        </Link>
        <Link
          href="/todos"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          View Todos
        </Link>
        <Link
          href="/users"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          View Users
        </Link>
      </div>
    </div>
  );
}