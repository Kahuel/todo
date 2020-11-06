import { combineReducers } from "redux";
import { tasks } from "./tasks";
import { text } from "./text";
import { language } from "./language";

export const reducers = combineReducers({ tasks, text, language });
