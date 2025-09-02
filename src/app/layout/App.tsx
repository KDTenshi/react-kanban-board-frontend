import type { FC } from "react";

import "../style/App.scss";

import { Header } from "../../features/ui/components/Header";
import { Sidebar } from "../../features/ui/components/Sidebar";
// import { HomePage } from "../../pages/HomePage";
// import { BoardsPage } from "../../pages/BoardsPage";
import { BoardPage } from "../../pages/BoardPage";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Sidebar />
        {/* <HomePage /> */}
        {/* <BoardsPage /> */}
        <BoardPage />
      </div>
    </div>
  );
};

export default App;
