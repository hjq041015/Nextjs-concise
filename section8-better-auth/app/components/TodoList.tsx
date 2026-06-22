import TodoDeleteButton from "@/app/components/TodoDeleteButton";
import TodoToggleButton from "@/app/components/TodoToggleButton";
import { getTodos, toggleTodoComplete } from "@/app/utils/actions";

async function TodoList() {
  const todos = await getTodos();

  return (
    <ul className="mt-8">
      {todos.map((todo: any) => (
        <form
          action={toggleTodoComplete.bind(null, todo.id)}
          className="flex justify-center my-1 gap-2"
          key={todo.id}
        >
          <li className={`${todo.complete ? "line-through" : ""} mr-8`}>
            {todo.text}
          </li>
          <TodoToggleButton todo={todo} />
          <TodoDeleteButton todo={todo} />
        </form>
      ))}
    </ul>
  );
}

export default TodoList;
