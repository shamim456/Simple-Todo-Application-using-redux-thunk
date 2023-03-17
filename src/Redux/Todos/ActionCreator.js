import {
  LOADED,
  ADDED,
  ALLCOMPLETED,
  REMOVE,
  TOGGLED,
  CLEARCOMPLETED,
  COLORSELECTE,
} from "./ActionsType";

// all todo action

export const loadedTodo = (todos) => {
  return {
    type: LOADED,
    payload: todos,
  };
};

export const addedTodo = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const removeTodo = (todoId) => {
  return {
    type: REMOVE,
    payload: todoId,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
// export const colorSelect = (todoId, color) => {
//   return {
//     type: COLORSELECTE,
//     payload: {
//       todoId,
//       color,
//     },
//   };
// };

export const colorSelected = (todoId, color) => {
  return {
      type: COLORSELECTE,
      payload: {
          todoId,
          color,
      },
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};
