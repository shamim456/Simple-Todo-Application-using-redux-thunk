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
    default:
      return state;
  }
};

export default TodosReducer;
