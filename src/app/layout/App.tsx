import type { FC } from "react";

import "../style/App.scss";

import { Header } from "../../features/ui/components/Header";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
