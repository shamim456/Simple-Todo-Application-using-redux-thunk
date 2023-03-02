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
          completed: false,
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

    case REMOVE:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    case COLORSELECTE:
      const { todoId, color } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }

        return {
          ...todo,
          color: color,
        };
      });

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export default TodosReducer;
