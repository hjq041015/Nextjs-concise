"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useFormStatus } from "react-dom";

function TodoAddButton() {
  const { pending } = useFormStatus();
  return (
    <Button variant="default" className="rounded-full" type="submit">
      {pending && <Spinner data-icon="inline-start"></Spinner>}
      {!pending && "Add"}
    </Button>
  );
}
export default TodoAddButton;
