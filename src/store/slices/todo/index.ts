import { combineReducers } from "@reduxjs/toolkit";
import todo, { TodoSliceState } from "./todoSlice";

const reducer = combineReducers({
  todo,
});

export type TodoState = {
  todo: TodoSliceState;
};

export default reducer;
