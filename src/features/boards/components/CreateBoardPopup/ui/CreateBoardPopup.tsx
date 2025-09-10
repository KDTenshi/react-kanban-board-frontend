import type { FC } from "react";

import style from "./CreateBoardPopup.module.scss";

const CreateBoardPopup: FC = () => {
  return (
    <div className={style.Popup}>
      <div className={style.Menu}>
        <h3 className={style.Title}>Create new board</h3>
        <div className={style.Container}>
          <h4 className={style.Label}>Board name</h4>
          <input type="text" placeholder="Board name goes here..." className={style.Input} />
        </div>
        <div className={style.Container}>
          <h4 className={style.Label}>Description</h4>
          <textarea className={style.Textarea} placeholder="Description goes here..."></textarea>
        </div>
        <div className={style.Container}>
          <h4 className={style.Label}>Deadline</h4>
          <div className={style.Datepicker}>
            <p className={style.Date}>Friday, 10 March 20205 at 12:25</p>
            <button className={style.Calendar}>
              <span className="material-symbols-outlined">edit_calendar</span>
            </button>
          </div>
        </div>
        <div className={style.Buttons}>
          <button className={style.Cancel}>Cancel</button>
          <button className={style.Confirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default CreateBoardPopup;
