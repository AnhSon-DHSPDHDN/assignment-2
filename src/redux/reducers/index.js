import { combineReducers } from "redux";
import { tasksListReducer } from "./taskReducer";

const appReducers = combineReducers({
  tasks: tasksListReducer,
})

export default appReducers