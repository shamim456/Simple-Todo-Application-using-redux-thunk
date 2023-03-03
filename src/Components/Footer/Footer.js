import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterChange, colorChanged } from "../../Redux/Filter/ActionCreator";
const remainingTask = (numberOfTask) => {
  switch (numberOfTask) {
    case 0:
      return "No Task";
    case 1:
      return "1 Task";

    default:
      return `${numberOfTask} Tasks`;
  }
};
const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const { status, colors } = filter;
  const dispatch = useDispatch();

  const todoRemaing = todos.filter((todo) => !todo.completed).length;
  const handleStatusChange = (status) => {
    dispatch(filterChange(status));
  };

  const handleColorChange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "remove"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{remainingTask(todoRemaing)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handleStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => handleStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => handleStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          onClick={() => handleColorChange("green")}
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          } `}
        ></li>
        <li
          onClick={() => handleColorChange("red")}
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          } `}
        ></li>
        <li
          onClick={() => handleColorChange("yellow")}
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          } `}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
