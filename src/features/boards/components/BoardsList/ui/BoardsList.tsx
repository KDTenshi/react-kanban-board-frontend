import type { FC } from "react";

import style from "./BoardsList.module.scss";
import { BoardCard } from "../../BoardCard";

const BoardsList: FC = () => {
  return (
    <div className={style.Wrapper}>
      <button className={style.Button}>
        <span className="material-symbols-outlined">add_box</span>Add new board
      </button>
      <div className={style.List}>
        <BoardCard size="big" color="red" />
        <BoardCard size="big" color="yellow" />
        <BoardCard size="big" color="green" />
        <BoardCard size="big" color="blue" />
        <BoardCard size="big" color="purple" />
        <BoardCard size="big" color="red" />
      </div>
    </div>
  );
};

export default BoardsList;
