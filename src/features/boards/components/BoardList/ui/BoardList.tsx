import type { FC } from "react";

import style from "./BoardList.module.scss";
import { BoardListRow } from "../../BoardListRow";

const BoardList: FC = () => {
  return (
    <div className={style.Board}>
      <div className={style.Heading}>
        <p className={style.Label}>Task name</p>
        <p className={style.Label}>Deadline</p>
        <p className={style.Label}>Actions</p>
      </div>
      <div className={style.List}>
        <BoardListRow type={"todo"} />
        <BoardListRow type={"inProgress"} />
        <BoardListRow type={"done"} />
      </div>
    </div>
  );
};

export default BoardList;
