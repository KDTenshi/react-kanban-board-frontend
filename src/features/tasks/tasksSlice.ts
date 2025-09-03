import { createSlice } from "@reduxjs/toolkit/react";
import type { TTask } from "../../shared/types/types";

type TasksState = {
  list: TTask[];
};

const initialState: TasksState = {
  list: [],
};

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {},
});
