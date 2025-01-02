"use client"; // Mark this as a client-side component

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Define the type for Todo
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function SingleTodoPage() {
  const { id } = useParams(); // Fetch dynamic route parameter
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch todo data based on dynamic route id
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => res.json())
        .then((data) => setTodo(data));
    }
  }, [id]);

  if (!todo) {
    return <div>Todo not found</div>; // Show a 404-like message if todo is not found
  }

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>Todo ID: {todo.id}</p>
      <p>User ID: {todo.userId}</p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
    </div>
  );
}