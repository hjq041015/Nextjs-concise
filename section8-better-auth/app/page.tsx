import TodoAddForm from "@/app/components/TodoAddForm";
import TodoList from "@/app/components/TodoList";
import Loading from "@/app/loading";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="flex flex-1 flex-col text-center">
      <h1 className="text-6xl font-serif">TODOS</h1>

      <hr className="my-4" />

      <Suspense fallback={<Loading />}>
        <TodoAddForm />
        <TodoList />
      </Suspense>
    </main>
  );
}
