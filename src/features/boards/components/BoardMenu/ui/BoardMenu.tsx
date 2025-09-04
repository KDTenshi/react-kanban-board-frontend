import type { FC } from "react";

import style from "./BoardMenu.module.scss";

const BoardMenu: FC = () => {
  return (
    <div className={style.Wrapper}>
      <div className={style.Menu}>
        <div className={style.Heading}>
          <span className={style.Icon}>
            <span className="material-symbols-outlined">view_kanban</span>
          </span>
          <h4 className={style.Title}>Board name</h4>
        </div>
        <nav className={style.Navigation}>
          <button className={style.Button}>
            <span className="material-symbols-outlined">summarize</span>About
          </button>
          <button className={style.Button}>
            <span className="material-symbols-outlined">list_alt</span>List
          </button>
          <button className={style.Button}>
            <span className="material-symbols-outlined">view_kanban</span>Board
          </button>
        </nav>
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
  );
};

export default BoardMenu;
