import type { FC } from "react";

import "../style/App.scss";

import { Header } from "../../features/ui/components/Header";
import { Sidebar } from "../../features/ui/components/Sidebar";
import { HomePage } from "../../pages/HomePage";
import { BoardsPage } from "../../pages/BoardsPage";
import { BoardPage } from "../../pages/BoardPage";
import { Route, Routes } from "react-router";
import { ColumnsList } from "../../features/boards/components/ColumnsList";
import { BoardAbout } from "../../features/boards/components/BoardAbout";
import { BoardList } from "../../features/boards/components/BoardList";
import { CreateBoardPopup } from "../../features/boards/components/CreateBoardPopup";

const App: FC = () => {
  return (
    <div className="App">
      <CreateBoardPopup />
      <Header />
      <div className="Body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<div>Settings</div>} />
          <Route path="/boards" element={<BoardsPage />} />
          <Route path="/board/:boardID" element={<BoardPage />}>
            <Route index element={<ColumnsList />} />
            <Route path="about" element={<BoardAbout />} />
            <Route path="list" element={<BoardList />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
