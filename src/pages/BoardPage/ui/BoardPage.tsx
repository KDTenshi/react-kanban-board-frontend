import type { FC } from "react";

import style from "./BoardPage.module.scss";
import { BoardMenu } from "../../../features/boards/components/BoardMenu";
import { ColumnsList } from "../../../features/boards/components/ColumnsList";

const BoardPage: FC = () => {
  return (
    <div className={style.Page}>
      <BoardMenu />
      <ColumnsList />
    </div>
  );
};

export default BoardPage;
