import { combineReducers } from "redux";
import { DataReducer } from "./DataReducer";
import { ThemeReducer } from "./ThemeReducer";
import { UniversityReducer } from "./UniversityReducer";

const rootReducer = combineReducers({
  DataReducer,
  ThemeReducer,
  UniversityReducer,
});

export default rootReducer;
