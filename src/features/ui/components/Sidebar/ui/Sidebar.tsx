import type { FC } from "react";

import style from "./Sidebar.module.scss";
import { Link } from "react-router";

const Sidebar: FC = () => {
  return (
    <div className={style.Sidebar}>
      <nav className={style.Links}>
        <Link to={"/"} className={style.Link}>
          <span className="material-symbols-outlined">home</span>
          Home
        </Link>
        <Link to={"/boards"} className={style.Link}>
          <span className="material-symbols-outlined">view_kanban</span>
          Boards
        </Link>
        <Link to={"/settings"} className={style.Link}>
          <span className="material-symbols-outlined">settings</span>
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
