import { createSlice } from "@reduxjs/toolkit/react";
import type { TBoard } from "../../shared/types/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createNewBoard } from "../../shared/utils/createNewBoard";

type BoardsState = {
  list: TBoard[];
};

const initialState: BoardsState = {
  list: [
    {
      id: "001",
      name: "Empty board",
      description: "",
      deadline: 1,
      createdAt: 123,
      columns: {
        todo: [],
        inProgress: [],
        done: [],
      },
      status: "fine",
    },
  ],
};

export const boardsSlice = createSlice({
  name: "boardsSlice",
  initialState,
  reducers: {
    addBoard: (state, action: PayloadAction<{ name: string; description?: string; deadline: number }>) => {
      const { name, description, deadline } = action.payload;

      const newBoard = createNewBoard({ name, deadline, description });

      state.list.push(newBoard);
    },
    deleteBoard: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      state.list = state.list.filter((board) => board.id !== id);
    },
  },
});

export const { addBoard, deleteBoard } = boardsSlice.actions;
