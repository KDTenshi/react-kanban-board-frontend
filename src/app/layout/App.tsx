import type { FC } from "react";

import "../style/App.scss";

import { Header } from "../../features/ui/components/Header";
import { Sidebar } from "../../features/ui/components/Sidebar";
import { HomePage } from "../../pages/HomePage";
import { BoardsPage } from "../../pages/BoardsPage";
import { BoardPage } from "../../pages/BoardPage";
import { Route, Routes } from "react-router";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<div>Settings</div>} />
          <Route path="/boards" element={<BoardsPage />} />
          <Route path="/board" element={<BoardPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
