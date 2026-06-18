import TodoActionButton from "@/app/components/TodoActionButton";
import { getTodos, toggleTodoComplete } from "@/app/utils/actions";

async function TodoList() {
  const todos = await getTodos();

  return (
    <ul>
      {todos.map((todo: any) => (
        <form
          action={toggleTodoComplete.bind(null, todo.id)}
          className="flex justify-center my-1"
          key={todo.id}
        >
          <li className={`${todo.complete ? "line-through" : ""} mr-8`}>
            {todo.text}
          </li>
          <TodoActionButton todo={todo} />
        </form>
      ))}
    </ul>
  );
}

export default TodoList;
