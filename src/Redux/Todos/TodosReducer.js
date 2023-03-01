import initialState from "./InitialState";
import {
  ADDED,
  ALLCOMPLETED,
  REMOVE,
  TOGGLED,
  COLORSELECTE,
  CLEARCOMPLETED,
} from "./ActionsType";

const todoIdGenerator = (todos) => {
  const unicId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1);
  return unicId + 1;
};

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          text: action.payload,
          id: todoIdGenerator(state),
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
};

export default TodosReducer;
