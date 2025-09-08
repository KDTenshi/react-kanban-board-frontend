import type { FC } from "react";

import style from "./BoardsList.module.scss";
import { BoardCard } from "../../BoardCard";
import { useAppSelector } from "../../../../../app/store/appStore";

const BoardsList: FC = () => {
  const boards = useAppSelector((state) => state.boardsSlice.list);

  return (
    <div className={style.Wrapper}>
      <button className={style.Button}>
        <span className="material-symbols-outlined">add_box</span>Add new board
      </button>
      <div className={style.List}>
        {boards.map((board) => (
          <BoardCard size="big" color="red" board={board} />
        ))}
      </div>
    </div>
  );
};

export default BoardsList;
