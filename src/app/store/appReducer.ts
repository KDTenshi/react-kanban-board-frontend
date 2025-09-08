import { combineReducers } from "@reduxjs/toolkit";
import { boardsSlice } from "../../features/boards/boardsSlice";
import { tasksSlice } from "../../features/tasks/tasksSlice";

export const appReducer = combineReducers({
  [boardsSlice.reducerPath]: boardsSlice.reducer,
  [tasksSlice.reducerPath]: tasksSlice.reducer,
});
