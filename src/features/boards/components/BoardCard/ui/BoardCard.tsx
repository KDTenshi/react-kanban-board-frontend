import type { FC } from "react";

import style from "./BoardCard.module.scss";
import { Link } from "react-router";
import type { TBoard } from "../../../../../shared/types/types";

type BoardCardSize = "big" | "small";
type BoardCardIconColor = "red" | "green" | "yellow" | "blue" | "purple";

interface BoardCardProps {
  size: BoardCardSize;
  color?: BoardCardIconColor;
  board: TBoard;
}

const colorsStyles: { [key in BoardCardIconColor]: string } = {
  red: style.Red,
  green: style.Green,
  blue: style.Blue,
  yellow: style.Yellow,
  purple: style.Purple,
};

const cardSizesStyles: { [key in BoardCardSize]: string } = {
  big: style.Big,
  small: style.Small,
};

const BoardCard: FC<BoardCardProps> = ({ size, color = "red", board }) => {
  return (
    <Link to={`/board/:${board.id}`} className={cardSizesStyles[size]}>
      <span className={colorsStyles[color]}>
        <span className="material-symbols-outlined">view_kanban</span>
      </span>
      {size === "small" && "Board name"}
      {size === "big" && (
        <div className={style.Info}>
          <h4 className={style.Name}>{board.name}</h4>
          <p className={style.Date}>Created at: 10.10.25/12:25</p>
          <p className={style.Date}>Deadline: 10.10.26/12:25</p>
        </div>
      )}
    </Link>
  );
};

export default BoardCard;
