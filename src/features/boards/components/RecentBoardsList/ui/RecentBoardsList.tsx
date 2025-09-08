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
        <BoardCard size="small" color="red" board={boards[0]} />
        <BoardCard size="small" color="yellow" board={boards[0]} />
        <BoardCard size="small" color="green" board={boards[0]} />
        <BoardCard size="small" color="blue" board={boards[0]} />
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
