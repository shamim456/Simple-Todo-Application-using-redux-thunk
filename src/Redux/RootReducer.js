import { combineReducers } from "redux";
import FilterReducer from "./Filter/FilterReducer";
import TodosReducer from "./Todos/TodosReducer";

const rootReducer = combineReducers({
  todos: TodosReducer,
  filter: FilterReducer,
});

export default rootReducer;
