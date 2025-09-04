import type { FC } from "react";

import style from "./BoardListPage.module.scss";

const BoardListPage: FC = () => {
  return (
    <div className={style.Page}>
      <div className={style.Heading}>
        <div className={style.Menu}>
          <div className={style.Title}>
            <span className={style.Icon}>
              <span className="material-symbols-outlined">view_kanban</span>
            </span>
            <h4 className={style.Name}>Board name</h4>
          </div>
          <div className={style.Navigation}>
            <button className={style.Button}>
              <span className="material-symbols-outlined">summarize</span>
              About
            </button>
            <button className={style.Button}>
              <span className="material-symbols-outlined">list_alt</span>
              List
            </button>
            <button className={style.Button}>
              <span className="material-symbols-outlined">view_kanban</span>
              Board
            </button>
          </div>
        </div>
        <div className={style.Controls}>
          <button className={style.Button}>
            <span className="material-symbols-outlined">view_kanban</span>
            Add new task
          </button>
          <div className={style.Filters}>
            <button className={style.Button}>
              <span className="material-symbols-outlined">sort</span>
              Sort by
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
            <button className={style.Button}>
              <span className="material-symbols-outlined">filter_list</span>
              Filter by
              <span className="material-symbols-outlined">keyboard_arrow_down</span>
            </button>
          </div>
        </div>
      </div>
      <div className={style.Content}>
        <div className={style.Top}>
          <p className={style.Label}>Task name</p>
          <p className={style.Label}>Deadline</p>
          <p className={style.Label}>Actions</p>
        </div>
        <div className={style.Lists}>
          <div className={style.List}>
            <p className={style.Todo}>
              <span className="material-symbols-outlined">arrow_drop_down</span>
              Todo
            </p>
          </div>
          <div className={style.List}>
            <p className={style.InProgress}>
              <span className="material-symbols-outlined">arrow_drop_down</span>
              In Progress
            </p>
          </div>
          <div className={style.List}>
            <p className={style.Done}>
              <span className="material-symbols-outlined">arrow_drop_down</span>
              Done
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardListPage;
