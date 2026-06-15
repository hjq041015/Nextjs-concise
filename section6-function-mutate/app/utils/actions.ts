"use server";

import { Todo } from "@/app/types/Todo";
import { writeFile } from "fs/promises";
import { readFile } from "fs/promises";

import path from "path";

const todoPath = path.join(process.cwd(), "app/data/todos.json");

export async function getTodos() {
  return await getTodoData();
}

export async function toggleTodoComplete(TodoId: number) {
  const todos = await getTodoData();
  const updatedTodos = todos.map((todo) => {
    if (todo.id === TodoId) {
      return {
        ...todo,
        completed: !todo.completed,
      };
    }
    return todo;
  });

  await writeFile(todoPath, JSON.stringify({ todos: updatedTodos }));
}

async function getTodoData(): Promise<Todo[]> {
  const jsonString = await readFile(todoPath, "utf-8");
  const { todos } = JSON.parse(jsonString);

  return todos;
}
