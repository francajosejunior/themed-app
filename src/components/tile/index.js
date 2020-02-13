import "./style.scss";

import React from "react";

const Tile = ({ label, value, color, size, icon, animate }) => {
  return (
    <div
      className={`tile ${size || "medium"} ${animate ? "animate" : ""}`}
      style={{
        backgroundColor: color,
        borderColor: color
      }}
    >
      <label className="label">{label}</label>
      <div className="value">{value}</div>
      <div className="icon">{icon}</div>
    </div>
  );
};

export default Tile;
