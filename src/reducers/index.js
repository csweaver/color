import { combineReducers } from "redux";

const colors = (state = { colors: [] }, action) => {
  if (action.type === "got colors") {
    return {
      ...state,
      colors: action.colors
    };
  } else {
    return state;
  }
};

export const rootReducer = combineReducers({
  colors
});
