import { addedTodo } from "../ActionCreator";

const addTodo = (todoText) => {
  return async (dispatch, getState) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
      headers: {
        "content-type": "application/json; charset = UTF-8",
      },
    });
    const todo = await response.json();
    dispatch(addedTodo(todo.text));
  };
};

export default addTodo;
