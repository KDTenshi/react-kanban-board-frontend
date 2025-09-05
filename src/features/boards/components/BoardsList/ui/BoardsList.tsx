import type { FC } from "react";

import style from "./BoardsList.module.scss";
import { Link } from "react-router";

const BoardsList: FC = () => {
  return (
    <div className={style.Wrapper}>
      <button className={style.Button}>
        <span className="material-symbols-outlined">add_box</span>Add new board
      </button>
      <div className={style.List}>
        <Link to={"/board"} className={style.Card}>
          <span className={style.Red}>
            <span className="material-symbols-outlined">view_kanban</span>
          </span>
          <div className={style.Info}>
            <h4 className={style.Name}>Board name</h4>
            <p className={style.Date}>Created at: 10.10.25/12:25</p>
            <p className={style.Date}>Deadline: 10.10.26/12:25</p>
          </div>
        </Link>
        <Link to={"/board"} className={style.Card}>
          <span className={style.Yellow}>
            <span className="material-symbols-outlined">view_kanban</span>
          </span>
          <div className={style.Info}>
            <h4 className={style.Name}>Board name</h4>
            <p className={style.Date}>Created at: 10.10.25/12:25</p>
            <p className={style.Date}>Deadline: 10.10.26/12:25</p>
          </div>
        </Link>
        <Link to={"/board"} className={style.Card}>
          <span className={style.Green}>
            <span className="material-symbols-outlined">view_kanban</span>
          </span>
          <div className={style.Info}>
            <h4 className={style.Name}>Board name</h4>
            <p className={style.Date}>Created at: 10.10.25/12:25</p>
            <p className={style.Date}>Deadline: 10.10.26/12:25</p>
          </div>
        </Link>
        <Link to={"/board"} className={style.Card}>
          <span className={style.Blue}>
            <span className="material-symbols-outlined">view_kanban</span>
          </span>
          <div className={style.Info}>
            <h4 className={style.Name}>Board name</h4>
            <p className={style.Date}>Created at: 10.10.25/12:25</p>
            <p className={style.Date}>Deadline: 10.10.26/12:25</p>
          </div>
        </Link>
        <Link to={"/board"} className={style.Card}>
          <span className={style.Purple}>
            <span className="material-symbols-outlined">view_kanban</span>
          </span>
          <div className={style.Info}>
            <h4 className={style.Name}>Board name</h4>
            <p className={style.Date}>Created at: 10.10.25/12:25</p>
            <p className={style.Date}>Deadline: 10.10.26/12:25</p>
          </div>
        </Link>
        <Link to={"/board"} className={style.Card}>
          <span className={style.Red}>
            <span className="material-symbols-outlined">view_kanban</span>
          </span>
          <div className={style.Info}>
            <h4 className={style.Name}>Board name</h4>
            <p className={style.Date}>Created at: 10.10.25/12:25</p>
            <p className={style.Date}>Deadline: 10.10.26/12:25</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BoardsList;
