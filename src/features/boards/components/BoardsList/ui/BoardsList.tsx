import type { FC } from "react";

import style from "./BoardsList.module.scss";
import { BoardCard } from "../../BoardCard";
import { useAppDispatch, useAppSelector } from "../../../../../app/store/appStore";
import { addBoard } from "../../../boardsSlice";

const BoardsList: FC = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.boardsSlice.list);

  const handleAddClick = () => {
    dispatch(addBoard({ name: "New board", deadline: Date.now() }));
  };

  return (
    <div className={style.Wrapper}>
      <button className={style.Button} onClick={handleAddClick}>
        <span className="material-symbols-outlined">add_box</span>Add new board
      </button>
      {boards.length === 0 && <h3 className={style.Empty}>You haven't created boards yet</h3>}
      <div className={style.List}>
        {boards.map((board) => (
          <BoardCard size="big" color="red" board={board} key={board.id} />
        ))}
      </div>
    </div>
  );
};

export default BoardsList;
