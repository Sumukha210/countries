import { combineReducers } from "redux";
import { DataReducer } from "./DataReducer";
import { ThemeReducer } from "./ThemeReducer";

const rootReducer = combineReducers({
  DataReducer,
  ThemeReducer,
});

export default rootReducer;
