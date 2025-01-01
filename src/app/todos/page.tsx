import Link from "next/link";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default async function TodosPage() {
  // 1) Fetch all todos
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  const todos: Todo[] = await res.json();

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">All Todos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {todos.map((todo) => (
          <div key={todo.id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{todo.title}</h2>
            <p className="mt-2">
              Completed:{" "}
              <span
                className={`${
                  todo.completed ? "text-green-600" : "text-red-600"
                } font-bold`}
              >
                {todo.completed ? "Yes" : "No"}
              </span>
            </p>
            <Link href={`/todos/${todo.id}`}>
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