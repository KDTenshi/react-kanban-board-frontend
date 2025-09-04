import type { FC } from "react";

import style from "./BoardInfo.module.scss";

const BoardInfo: FC = () => {
  return (
    <div className={style.Info}>
      <div className={style.Wrapper}>
        <h4 className={style.Title}>Description</h4>
        <p className={style.Description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum
        </p>
      </div>
      <div className={style.Wrapper}>
        <p className={style.Date}>Created at: Friday, 10 March 2025, 12:25</p>
        <p className={style.Date}>Deadline: Friday, 10 March 2026, 12:25</p>
      </div>
    </div>
  );
};

export default BoardInfo;
