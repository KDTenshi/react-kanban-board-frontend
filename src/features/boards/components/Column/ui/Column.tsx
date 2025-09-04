import type { FC } from "react";

import style from "./Column.module.scss";
import type { TColumnType } from "../../../../../shared/types/types";

interface ColumnProps {
  type: TColumnType;
}

const colorClassNames: { [key in TColumnType]: string } = {
  todo: style.Todo,
  inProgress: style.InProgress,
  done: style.Done,
};

const columnTitles: { [key in TColumnType]: string } = {
  todo: "Todo",
  inProgress: "In Progress",
  done: "Done",
};

const Column: FC<ColumnProps> = ({ type }) => {
  return (
    <div className={style.Column}>
      <p className={colorClassNames[type]}>
        <span className={style.Dot}></span>
        {columnTitles[type]}
      </p>
      <div className={style.Body}></div>
    </div>
  );
};

export default Column;
