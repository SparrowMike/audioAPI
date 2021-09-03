import React from "react";

const Osc1 = ({ change, settings, changeType }) => {
  let { type, frequency, detune } = settings;

  return (
    <div className="control">
      <h2>Osc 1 </h2>
      <div className="param">
        <h3>Frequency</h3>
        <input
          value={frequency}
          onChange={change}
          type="range"
          max="5000"
          id="frequency"
        />

        <h3>Detune</h3>
        <input
          value={detune}
          onChange={change}
          type="range"
          max="100"
          id="detune"
        />
      </div>
      <div className="param">
        <h3>Wave</h3>
        <button
          id="sine"
          onClick={changeType}
          className={`${type === "sine" && "active"}`}
        >
          Sine
        </button>
        <button
          id="triangle"
          onClick={changeType}
          className={`${type === "triangle" && "active"}`}
        >
          Triangle
        </button>
        <button
          id="square"
          onClick={changeType}
          className={`${type === "square" && "active"}`}
        >
          Square
        </button>
        <button
          id="sawtooth"
          onClick={changeType}
          className={`${type === "sawtooth" && "active"}`}
        >
          Sawtooth
        </button>
      </div>
    </div>
  );
};

export default Osc1;
