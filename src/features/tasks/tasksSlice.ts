import { createSlice } from "@reduxjs/toolkit/react";
import type { TTask, TTaskPriority } from "../../shared/types/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createNewTask } from "../../shared/utils/createNewTask";

type TasksState = {
  list: TTask[];
};

interface AddTaskParams {
  name: string;
  description?: string;
  deadline: number;
  boardID: string;
  priority: TTaskPriority;
}

const initialState: TasksState = {
  list: [],
};

export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<AddTaskParams>) => {
      const { name, description, deadline, boardID, priority } = action.payload;

      const newTask = createNewTask({ name, description, deadline, boardID, priority });

      state.list.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      state.list = state.list.filter((task) => task.id !== id);
    },
  },
});

export const { addTask, deleteTask } = tasksSlice.actions;
