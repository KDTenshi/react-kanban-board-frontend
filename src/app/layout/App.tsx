import type { FC } from "react";

import "../style/App.scss";

import { Header } from "../../features/ui/components/Header";
import { Sidebar } from "../../features/ui/components/Sidebar";
import { HomePage } from "../../pages/HomePage";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Sidebar />
        <HomePage />
      </div>
    </div>
  );
};

export default App;
