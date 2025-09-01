import type { FC } from "react";

import style from "./BoardsPage.module.scss";

const BoardsPage: FC = () => {
  return (
    <div className={style.Page}>
      <h2 className={style.Title}>Your boards</h2>
      <div className={style.Boards}>
        <button className={style.Button}>
          <span className="material-symbols-outlined">add_box</span>Add new board
        </button>
        <div className={style.List}>
          <button className={style.Board}>
            <span className={style.Red}>
              <span className="material-symbols-outlined">view_kanban</span>
            </span>
            Board name
          </button>
          <button className={style.Board}>
            <span className={style.Yellow}>
              <span className="material-symbols-outlined">view_kanban</span>
            </span>
            Board name
          </button>
          <button className={style.Board}>
            <span className={style.Green}>
              <span className="material-symbols-outlined">view_kanban</span>
            </span>
            Board name
          </button>
          <button className={style.Board}>
            <span className={style.Purple}>
              <span className="material-symbols-outlined">view_kanban</span>
            </span>
            Board name
          </button>
          <button className={style.Board}>
            <span className={style.Blue}>
              <span className="material-symbols-outlined">view_kanban</span>
            </span>
            Board name
          </button>
          <button className={style.Board}>
            <span className={style.Red}>
              <span className="material-symbols-outlined">view_kanban</span>
            </span>
            Board name
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoardsPage;
