import Link from "next/link";


interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  const users: User[] = await res.json();

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">All Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="mb-1 text-gray-700">@{user.username}</p>
            <p className="mb-2 text-blue-600 underline">{user.email}</p>
            <Link href={`/users/${user.id}`}>
              <span className="inline-block mt-2 text-blue-500 underline cursor-pointer">
                View Profile
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}