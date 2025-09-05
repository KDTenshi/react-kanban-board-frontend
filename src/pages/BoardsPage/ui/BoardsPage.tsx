import type { FC } from "react";

import style from "./BoardsPage.module.scss";
import { BoardsList } from "../../../features/boards/components/BoardsList";

const BoardsPage: FC = () => {
  return (
    <div className={style.Page}>
      <h2 className={style.Title}>Your boards</h2>
      <BoardsList />
    </div>
  );
};

export default BoardsPage;
