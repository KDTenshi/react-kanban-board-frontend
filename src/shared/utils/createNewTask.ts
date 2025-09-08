import type { TTask, TTaskPriority } from "../types/types";
import { nanoid } from "@reduxjs/toolkit/react";

interface CreateNewTaskParams {
  name: string;
  description?: string;
  deadline: number;
  boardID: string;
  priority: TTaskPriority;
}

export const createNewTask = ({ name, description, deadline, boardID, priority }: CreateNewTaskParams) => {
  const task: TTask = {
    id: nanoid(),
    name,
    description,
    createdAt: Date.now(),
    deadline,
    boardID,
    column: "todo",
    priority,
  };

  return task;
};
