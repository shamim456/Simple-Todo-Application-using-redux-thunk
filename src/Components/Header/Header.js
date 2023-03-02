import React from "react";
import note from "../../assets/images/notes.png";
import doubleTick from "../../assets/images/double-tick.png";
import plusImage from "../../assets/images/plus.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addedTodo,
  allCompleted,
  clearCompleted,
} from "../../Redux/Todos/ActionCreator";
const Header = () => {
  const dispatch = useDispatch();

  const handleAddedTodo = (e) => {
    const text = e.target.todoText.value;
    if (text === "") {
      e.preventDefault();
      return;
    } else {
      e.preventDefault();
      dispatch(addedTodo(text));
      e.target.reset();
    }
  };
  const todos = useSelector((state) => state.todos);
  const handleAllCompleted = () => {
    dispatch(allCompleted());
    console.log(todos);
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
    console.log('shamim')
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleAddedTodo}
      >
        <img src={note} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          name="todoText"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={handleAllCompleted}
        >
          <img className="w-4 h-4" src={doubleTick} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={handleClearCompleted}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
