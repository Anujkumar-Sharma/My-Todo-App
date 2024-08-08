import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  createTodo,
  deleteTodo,
  Todo,
  updateTodo,
} from "../store/slices/todo/todoSlice";
import moment from "moment";

const useTodo = () => {
  const { todos, selectedTab } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const create = (payload: Todo) => {
    dispatch(createTodo(payload));
  };

  const update = (payload: Partial<Todo>) => {
    dispatch(updateTodo(payload));
  };

  const remove = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const toggleImportant = ({
    id,
    important,
  }: {
    id: string;
    important: boolean;
  }) => {
    dispatch(updateTodo({ id, important }));
  };

  const filteredTodos = todos.filter((todo) => {
    if (selectedTab === "all-tasks") {
      return true;
    }
    if (selectedTab === "important-tasks") {
      return todo.important;
    }
    if (selectedTab === "today-tasks") {
      return (
        moment(todo.dueDate).format("DD/MM/YYYY") ===
        moment().format("DD/MM/YYYY")
      );
    }
  });

  return { todos: filteredTodos, create, update, remove, toggleImportant };
};

export default useTodo;
