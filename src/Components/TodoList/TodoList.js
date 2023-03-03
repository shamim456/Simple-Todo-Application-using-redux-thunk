import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const { status, colors } = filter;
  const filteredByStatus = (todo) => {
    switch (status) {
      case "Complete":
        return todo.completed;
      case "Incomplete":
        return !todo.completed;

      // eslint-disable-next-line no-fallthrough
      default:
        return true;
    }
  };

  const filteredByColor = (todo) => {
    if (colors.length > 0) {
      return colors.includes(todo?.color);
    }
    return true;
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filteredByStatus)
        .filter(filteredByColor)
        .map((todo) => (
          <Todo key={todo.id} todo={todo}></Todo>
        ))}
    </div>
  );
};

export default TodoList;
