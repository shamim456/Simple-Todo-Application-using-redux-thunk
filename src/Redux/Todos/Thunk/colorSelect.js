import { colorSelected } from "../ActionCreator";

const colorSelect = (todoId, color) => {
  return async (dispatch, getState) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color,
      }),
      headers: {
        "content-type": "application/json; charset = UTF-8",
      },
    });

    const todo = await response.json();

    dispatch(colorSelected(todo.id, color));
  };
};

export default colorSelect;
