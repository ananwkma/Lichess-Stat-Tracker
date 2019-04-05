import { combineReducers } from "redux";
import stats from "./stats";
import profile from "./profile";
import bg from "./bg";

export default combineReducers({
  stats,
  profile,
  bg
});
