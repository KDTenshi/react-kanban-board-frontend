import type { FC } from "react";

import style from "./HomePage.module.scss";
import { RecentBoardsList } from "../../../features/boards/components/RecentBoardsList";

const HomePage: FC = () => {
  return (
    <div className={style.Page}>
      <div className={style.Text}>
        <p className={style.Date}>Friday, 12 March 2025, 12:45</p>
        <h1 className={style.Welcome}>Welcome, UserName!</h1>
      </div>
      <div className={style.Content}>
        <RecentBoardsList />
        <div className={style.Empty}>
          <h2 className={style.Later}>Something will be added here later</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
