import type { FC } from "react";

import style from "./BoardAboutPage.module.scss";
import { BoardMenu } from "../../../features/boards/components/BoardMenu";
import { BoardAbout } from "../../../features/boards/components/BoardAbout";

const BoardAboutPage: FC = () => {
  return (
    <div className={style.Page}>
      <BoardMenu />
      <BoardAbout />
    </div>
  );
};

export default BoardAboutPage;
