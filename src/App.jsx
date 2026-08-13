import { useState } from "react";
import "./App.css";

import Intro from "./pages/Intro";
import Home from "./pages/Home";

function App() {
  const [showIntro, setShowIntro] = useState(
    sessionStorage.getItem("portfolioStarted") !== "true"
  );

  const startPortfolio = () => {
    sessionStorage.setItem("portfolioStarted", "true");
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <Intro onStart={startPortfolio} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;