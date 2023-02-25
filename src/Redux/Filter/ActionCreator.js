import { FILTERCHANGED, COLORCHANGED } from "./ActionTypes";

export const filterChange = (filterName) => {
  return {
    type: FILTERCHANGED,
    payload: filterName,
  };
};
export const colorChanged = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};
