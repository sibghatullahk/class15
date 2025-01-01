import { notFound } from "next/navigation";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default async function SingleTodoPage({
  params,
}: {
  params: { id: string };
}) {
  // 1) Fetch single todo
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
  if (!res.ok) {
    return notFound();
  }

  const todo: Todo = await res.json();
  if (!todo || !todo.id) {
    return notFound();
  }

  return (
    <article className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Todo #{todo.id}</h1>
      <p className="mb-2">Title: {todo.title}</p>
      <p>
        Completed:{" "}
        <span
          className={`${
            todo.completed ? "text-green-600" : "text-red-600"
          } font-bold`}
        >
          {todo.completed ? "Yes" : "No"}
        </span>
      </p>
      <p className="text-gray-500 mt-4">User ID: {todo.userId}</p>
    </article>
  );
}