import type { FC } from "react";

import style from "./BoardListPage.module.scss";
import { BoardMenu } from "../../../features/boards/components/BoardMenu";
import { BoardList } from "../../../features/boards/components/BoardList";

const BoardListPage: FC = () => {
  return (
    <div className={style.Page}>
      <BoardMenu />
      <BoardList />
    </div>
  );
};

export default BoardListPage;
