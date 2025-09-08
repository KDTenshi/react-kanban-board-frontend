import type { FC } from "react";

import style from "./BoardSettings.module.scss";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch } from "../../../../../app/store/appStore";
import { deleteBoard } from "../../../boardsSlice";

const BoardSettings: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    const id = params.boardID;

    console.log(id);

    if (!id) return;

    navigate("/boards", { replace: true });
    dispatch(deleteBoard({ id }));
  };

  return (
    <div className={style.Settings}>
      <h4 className={style.Title}>Settings</h4>
      <div className={style.Body}>
        <h1 className={style.Empty}>Settings will go here</h1>
        {params && <button onClick={handleDelete}>DELETE TEST</button>}
      </div>
    </div>
  );
};

export default BoardSettings;
