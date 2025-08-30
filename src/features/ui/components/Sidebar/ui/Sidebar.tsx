import type { FC } from "react";

import style from "./Sidebar.module.scss";

const Sidebar: FC = () => {
  return (
    <div className={style.Sidebar}>
      <nav className={style.Links}>
        <a href="/" className={style.Link}>
          <span className="material-symbols-outlined">home</span>
          Home
        </a>
        <a href="/" className={style.Link}>
          <span className="material-symbols-outlined">view_kanban</span>
          Boards
        </a>
        <a href="/" className={style.Link}>
          <span className="material-symbols-outlined">settings</span>
          Settings
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
