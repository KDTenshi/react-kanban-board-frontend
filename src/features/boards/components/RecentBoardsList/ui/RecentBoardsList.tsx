import type { FC } from "react";

import style from "./RecentBoardsList.module.scss";
import { BoardCard } from "../../BoardCard";
import { useAppSelector } from "../../../../../app/store/appStore";

const RecentBoardsList: FC = () => {
  const boards = useAppSelector((state) => state.boardsSlice.list);

  return (
    <div className={style.Wrapper}>
      <h3 className={style.Title}>Recent boards</h3>
      <nav className={style.List}>
        {boards.map((board) => (
          <BoardCard size="small" color="red" board={board} key={board.id} />
        ))}
      </nav>
    </div>
  );
};

export default RecentBoardsList;

<div className={style.Boards}>
  <h3 className={style.Title}>Recent Boards</h3>
  <div className={style.List}>
    <button className={style.Board}></button>
    <button className={style.Board}>
      <span className={style.Yellow}>
        <span className="material-symbols-outlined">view_kanban</span>
      </span>
      Board name
    </button>
    <button className={style.Board}>
      <span className={style.Green}>
        <span className="material-symbols-outlined">view_kanban</span>
      </span>
      Board name
    </button>
    <button className={style.Board}>
      <span className={style.Purple}>
        <span className="material-symbols-outlined">view_kanban</span>
      </span>
      Board name
    </button>
  </div>
</div>;
