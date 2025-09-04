import type { FC } from "react";

import style from "./BoardAbout.module.scss";
import { BoardInfo } from "../../BoardInfo";
import { BoardSettings } from "../../BoardSettings";

const BoardAbout: FC = () => {
  return (
    <div className={style.About}>
      <BoardInfo />
      <BoardSettings />
    </div>
  );
};

export default BoardAbout;
