import TodoAddButton from "@/app/components/TodoAddButton";
import { ToggleTodoAdd } from "@/app/utils/actions";
import { Input } from "@/components/ui/input";

function TodoAddForm() {
  return (
    <form action={ToggleTodoAdd} className="flex mx-auto w-1/3 mt-2 gap-2">
      <Input name="text" placeholder="Add a new todo" />
      <TodoAddButton />
    </form>
  );
}
export default TodoAddForm;
