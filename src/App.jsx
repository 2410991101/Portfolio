import { useState } from "react";
import "./App.css";

import Intro from "./pages/Intro";
import Home from "./pages/Home";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro ? (
        <Intro onStart={() => setShowIntro(false)} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;