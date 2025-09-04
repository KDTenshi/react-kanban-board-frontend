import type { FC } from "react";

import style from "./BoardAboutPage.module.scss";

const BoardAboutPage: FC = () => {
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
        <div className={style.Body}>
          <div className={style.Description}>
            <h4 className={style.Label}>Description</h4>
            <p className={style.Text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div className={style.Dates}>
            <p className={style.Date}>Created at: Friday, 10 March 2025, 12:25</p>
            <p className={style.Date}>Deadline: Friday, 10 March 2026, 12:25</p>
          </div>
        </div>
        <div className={style.Settings}>
          <h4 className={style.Label}>Settigns</h4>
          <h1 className={style.Empty}>Settings will go here</h1>
        </div>
      </div>
    </div>
  );
};

export default BoardAboutPage;
