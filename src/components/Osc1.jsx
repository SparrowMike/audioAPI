import React from "react";

const Osc1 = ({ change, settings }) => {
  return (
    <div className="control">
      <h2>Osc 1 </h2>
      <div className="param">
        <h3>Frequency</h3>
        <input
          value={settings.frequency}
          onChange={change}
          type="range"
          max="5000"
          id="frequency"
        />

        <h3>Detune</h3>
        <input
          value={settings.detune}
          onChange={change}
          type="range"
          max="100"
          id="detune"
        />
      </div>
    </div>
  );
};

export default Osc1;
