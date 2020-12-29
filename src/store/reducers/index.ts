import { combineReducers } from "redux";
import { tasks } from "./tasks";
import { text } from "./text";
import { language } from "./language";
import { filter } from "./filter";

export const reducers = combineReducers({
  tasks,
  text,
  language,
  filter,
});
