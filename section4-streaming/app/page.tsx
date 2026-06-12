import TodoList from "@/app/components/TodoList.tsx";
import Loading from "@/app/loading.tsx";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="text-center">
      <h1 className="text-6xl font-serif">TODOS</h1>
      <hr />
      <Suspense fallback={<Loading />}>
        <TodoList />
      </Suspense>
    </main>
  )
}