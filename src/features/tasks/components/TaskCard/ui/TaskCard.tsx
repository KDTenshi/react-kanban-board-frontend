import type { FC } from "react";

import style from "./TaskCard.module.scss";

const TaskCard: FC = () => {
  return (
    <div className={style.Card}>
      <p className={style.Title}>Task title</p>
      <div className={style.Info}>
        <p className={style.Priority}>
          {/* Priority: <span className={style.Low}>Low</span> */}
          Priority: <span className={style.Moderate}>Moderate</span>
          {/* Priority: <span className={style.High}>High</span> */}
        </p>
        <p className={style.Deadline}>Deadline: 10.10.25/12:25</p>
      </div>
    </div>
  );
};

export default TaskCard;
