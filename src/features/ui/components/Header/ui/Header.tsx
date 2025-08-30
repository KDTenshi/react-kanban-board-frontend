import type { FC } from "react";

import style from "./Header.module.scss";

const Header: FC = () => {
  return (
    <div className={style.Header}>
      <div className={style.Logo}>
        <button className={style.Menu}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div>
          <img src="/logo.svg" alt="Logo" />
        </div>
      </div>
      <div className={style.User}>
        <button className={style.SignIn}>
          <span className="material-symbols-outlined">login</span>
          Sign In
        </button>
        <button className={style.SignUp}>
          <span className="material-symbols-outlined">person_add</span>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
