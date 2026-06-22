"use client";

import { TodoModel } from "@/app/generated/prisma/models";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useFormStatus } from "react-dom";

function TodoActionButton({ todo }: { todo: TodoModel }) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      variant="outline"
      className="rounded-full"
    >
      {pending && <Spinner data-icon="inline-start"></Spinner>}
      {todo.complete ? "Undo" : "Complete"}
    </Button>
  );
}
export default TodoActionButton;
