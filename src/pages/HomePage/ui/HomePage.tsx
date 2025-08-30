import type { FC } from "react";

import style from "./HomePage.module.scss";

const HomePage: FC = () => {
  return (
    <div className={style.Page}>
      <div className={style.Text}>
        <p className={style.Date}>Friday, 12 March 2025, 12:45</p>
        <h1 className={style.Welcome}>Welcome, UserName!</h1>
      </div>
      <div className={style.Content}>
        <div className={style.Boards}>
          <h3 className={style.Title}>Recent Boards</h3>
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
          </div>
        </div>
        <div className={style.Empty}>
          <h2 className={style.Later}>Something will be added here later</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
