import { COLORCHANGED, FILTERCHANGED } from "./ActionTypes";
import initialState from "./InitialState";

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHANGED:
      const { changeType, color } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "remove":
          return {
            ...state,
            colors: state.colors.filter(
              (existingColor) => existingColor !== color
            ),
          };

        default:
          return state;
      }
    default:
      return state;
  }
};

export default FilterReducer;
