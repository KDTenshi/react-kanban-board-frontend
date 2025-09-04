import type { FC } from "react";

import style from "./ColumnsList.module.scss";
import Column from "../../Column/ui/Column";

const ColumnsList: FC = () => {
  return (
    <div className={style.Columns}>
      <Column type={"todo"} />
      <Column type={"inProgress"} />
      <Column type={"done"} />
    </div>
  );
};

export default ColumnsList;
