import { loadedTodo } from "../ActionCreator";

const fetchTodos = async (dispatch, getState) => {
  const response = await fetch("http://localhost:9000/todos");
  const todos = await response.json();

  dispatch(loadedTodo(todos));
};

export default fetchTodos;
