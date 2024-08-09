import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import GsapTransition from "./components/GsapTransition";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <GsapTransition />
        {/* Add your footer here */}
      </BrowserRouter>
    </>
  );
}

export default App;
