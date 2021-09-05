import React from "react";
import "./App.scss";
import Filter from "./components/Filter";
import Osc1 from "./components/Osc1";

function App() {
  return (
    <div className="App">
      <div className="center">
        <h1>Sliders</h1>
      </div>
      <Osc1 />
      <Filter />
    </div>
  );
}

export default App;
