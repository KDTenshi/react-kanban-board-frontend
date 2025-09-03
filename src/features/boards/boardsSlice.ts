import { createSlice } from "@reduxjs/toolkit/react";
import type { TBoard } from "../../shared/types/types";

type BoardsState = {
  list: TBoard[];
};

const initialState: BoardsState = {
  list: [],
};

export const boardsSlice = createSlice({
  name: "boardsSlice",
  initialState,
  reducers: {},
});
