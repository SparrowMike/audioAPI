import React, { useState } from "react";
import "./App.scss";
import Osc1 from "./components/Osc1";

const actx = new AudioContext();
const out = actx.destination;

const osc1 = actx.createOscillator();
const gain1 = actx.createGain();

osc1.connect(gain1);
gain1.connect(out);

function App() {
  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
  });

  const changeOsc1 = (e) => {
    let { value, id } = e.target;
    setOsc1Settings({ ...osc1Settings, [id]: value });
    osc1[id].value = value;
  };

  return (
    <div className="App">
      <h1>Sliders</h1>
      <button onClick={() => osc1.start()}>Noise</button>
      <button onClick={() => osc1.stop()}>Stop</button>
      <Osc1 change={changeOsc1} settings={osc1Settings} />
    </div>
  );
}

export default App;
