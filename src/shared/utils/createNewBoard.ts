import type { TBoard } from "../types/types";
import { nanoid } from "@reduxjs/toolkit/react";

interface CreateNewBoardParams {
  name: string;
  description?: string;
  deadline: number;
}

export const createNewBoard = ({ name, description, deadline }: CreateNewBoardParams) => {
  const board: TBoard = {
    id: nanoid(),
    name,
    description,
    columns: {
      todo: [],
      inProgress: [],
      done: [],
    },
    createdAt: Date.now(),
    deadline,
    status: "fine",
  };

  return board;
};
