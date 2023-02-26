import { combineReducers } from "redux";
import TodosReducer from "./Todos/TodosReducer";

const rootReducer = combineReducers({
  todos: TodosReducer,
});

export default rootReducer;
