"use client";

import { TodoModel } from "@/app/generated/prisma/models";
import { toggleTodoDelete } from "@/app/utils/actions";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useFormStatus } from "react-dom";

function TodoDeleteButton({ todo }: { todo: TodoModel }) {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="destructive"
      className="rounded-full"
      type="submit"
      disabled={pending}
      formAction={toggleTodoDelete.bind(null, todo.id)}
    >
      {pending && <Spinner data-icon="inline-start"></Spinner>}
      {!pending && "Delete"}
    </Button>
  );
}
export default TodoDeleteButton;
