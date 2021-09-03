import React from "react";

const Filter = ({ change, settings, changeType }) => {
  const { frequency, detune, Q, gain, type } = settings;
  return (
    <div className="control">
      <h2>Filter</h2>
      <div className="params">
        <h3>Frequency</h3>
        <input
          value={frequency}
          type="range"
          onChange={change}
          id="frequency"
          max="10000"
        />
      </div>
      <div className="params">
        <h3>Detune</h3>
        <input value={detune} type="range" onChange={change} id="detune" />
      </div>
      <div className="params">
        <h3>Q</h3>
        <input value={Q} type="range" onChange={change} id="Q" max="10" />
      </div>
      <div className="params">
        <h3>Gain</h3>
        <input
          value={gain}
          type="range"
          onChange={change}
          id="gain"
          min="1"
          max="10"
        />
      </div>

      <div className="param">
        <h3>Type</h3>
        <button
          onClick={changeType}
          id="lowpass"
          className={`${type === "lowpass" && "active"}`}
        >
          LowPass
        </button>
        <button
          onClick={changeType}
          id="highpass"
          className={`${type === "highpass" && "active"}`}
        >
          Highpass
        </button>
        <button
          onClick={changeType}
          id="notch"
          className={`${type === "notch" && "active"}`}
        >
          Notch
        </button>
        <button
          onClick={changeType}
          id="lowshelf"
          className={`${type === "lowshelf" && "active"}`}
        >
          Lowshelf
        </button>
        <button
          onClick={changeType}
          id="highshelf"
          className={`${type === "highshelf" && "active"}`}
        >
          highshelf
        </button>
      </div>
    </div>
  );
};

export default Filter;