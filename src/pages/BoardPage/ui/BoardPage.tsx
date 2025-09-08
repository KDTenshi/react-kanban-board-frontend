import type { FC } from "react";

import style from "./BoardPage.module.scss";
import { BoardMenu } from "../../../features/boards/components/BoardMenu";
import { Outlet } from "react-router";

const BoardPage: FC = () => {
  return (
    <div className={style.Page}>
      <BoardMenu />
      <Outlet />
    </div>
  );
};

export default BoardPage;
