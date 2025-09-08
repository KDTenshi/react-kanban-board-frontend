export type TBoardStatus = "fine" | "expiring" | "expired";
export type TColumnType = "todo" | "inProgress" | "done";
export type TTaskPriority = "low" | "moderate" | "high";

export type TBoard = {
  id: string;
  name: string;
  description?: string;
  columns: {
    [key in TColumnType]: string[];
  };
  createdAt: number;
  deadline: number;
  status: TBoardStatus;
};

export type TTask = {
  id: string;
  boardID: string;
  column: TColumnType;
  name: string;
  description?: string;
  createdAt: number;
  deadline: number;
  priority: TTaskPriority;
};
