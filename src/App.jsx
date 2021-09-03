import React, { useState } from "react";
import "./App.scss";
import Filter from "./components/Filter";
import Osc1 from "./components/Osc1";

const actx = new AudioContext();
const out = actx.destination;

const osc1 = actx.createOscillator();
const gain1 = actx.createGain();
const filter = actx.createBiquadFilter();

osc1.connect(gain1);
gain1.connect(filter);
filter.connect(out);

function App() {
  const [osc1Settings, setOsc1Settings] = useState({
    frequency: osc1.frequency.value,
    detune: osc1.detune.value,
    type: osc1.type,
  });

  const [filterSettings, setFilterSettings] = useState({
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    Q: filter.Q.value,
    gain: filter.gain.value,
    type: filter.type,
  });

  const changeOsc1 = (e) => {
    let { value, id } = e.target;
    setOsc1Settings({ ...osc1Settings, [id]: value });
    osc1[id].value = value;
  };

  const changeOsc1Type = (e) => {
    let { id } = e.target;
    setOsc1Settings({ ...osc1Settings, type: id });
    osc1.type = id;
  };

  const changeFilter = (e) => {
    let { value, id } = e.target;
    setFilterSettings({ ...filterSettings, [id]: value });
    filter[id].value = value;
  };

  const changeFilterType = (e) => {
    let { id } = e.target;
    setFilterSettings({ ...filterSettings, type: id });
    filter.type = id;
  };

  return (
    <div className="App">
      <div className="center">
        <h1>Sliders</h1>
        <button onClick={() => osc1.start()}>Noise</button>
        <button onClick={() => osc1.stop()}>Stop</button>
      </div>
      <Osc1
        change={changeOsc1}
        settings={osc1Settings}
        changeType={changeOsc1Type}
      />
      <Filter
        change={changeFilter}
        settings={filterSettings}
        changeType={changeFilterType}
      />
    </div>
  );
}

export default App;
