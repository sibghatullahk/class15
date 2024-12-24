import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to the Blog App</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore posts and learn more about dynamic routing in Next.js.
      </p>
      <Link href="/posts">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Go to Posts
        </button>
      </Link>
    </div>
  );
}
