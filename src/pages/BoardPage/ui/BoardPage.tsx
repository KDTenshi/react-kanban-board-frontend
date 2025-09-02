import type { FC } from "react";

import style from "./BoardPage.module.scss";

const BoardPage: FC = () => {
  return (
    <div className={style.Page}>
      <div className={style.Heading}>
        <div className={style.Menu}>
          <div className={style.Info}>
            <div className={style.Title}>
              <span className={style.Icon}>
                <span className="material-symbols-outlined">view_kanban</span>
              </span>
              <h4 className={style.Name}>Board name</h4>
            </div>
            <button className={style.Button}>
              <span className="material-symbols-outlined">settings</span>
              Settings
            </button>
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
      <div className={style.Columns}>
        <div className={style.Column}>
          <div className={style.Todo}>
            <span className={style.Dot}></span>
            <p className={style.Text}>To Do</p>
          </div>
          <div className={style.Body}></div>
        </div>
        <div className={style.Column}>
          <div className={style.InProgress}>
            <span className={style.Dot}></span>
            <p className={style.Text}>In Progress</p>
          </div>
          <div className={style.Body}></div>
        </div>
        <div className={style.Column}>
          <div className={style.Done}>
            <span className={style.Dot}></span>
            <p className={style.Text}>Done</p>
          </div>
          <div className={style.Body}></div>
        </div>
      </div>
    </div>
  );
};

export default BoardPage;
