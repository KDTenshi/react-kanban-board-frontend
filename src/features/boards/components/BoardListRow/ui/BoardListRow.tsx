import type { FC } from "react";

import style from "./BoardListRow.module.scss";
import type { TColumnType } from "../../../../../shared/types/types";

interface BoardListRowProps {
  type: TColumnType;
}

const colorClassNames: { [key in TColumnType]: string } = {
  todo: style.Todo,
  inProgress: style.InProgress,
  done: style.Done,
};

const rowTitles: { [key in TColumnType]: string } = {
  todo: "Todo",
  inProgress: "In Progress",
  done: "Done",
};

const BoardListRow: FC<BoardListRowProps> = ({ type }) => {
  return (
    <div className={style.Row}>
      <p className={colorClassNames[type]}>
        <span className="material-symbols-outlined">arrow_drop_down</span>
        {rowTitles[type]}
      </p>
    </div>
  );
};

export default BoardListRow;

<div className={style.Container}></div>;
