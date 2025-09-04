import type { FC } from "react";

import style from "./BoardSettings.module.scss";

const BoardSettings: FC = () => {
  return (
    <div className={style.Settings}>
      <h4 className={style.Title}>Settings</h4>
      <div className={style.Body}>
        <h1 className={style.Empty}>Settings will go here</h1>
      </div>
    </div>
  );
};

export default BoardSettings;
