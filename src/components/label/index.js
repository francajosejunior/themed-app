import React from "react";
import "./style.scss";

const Label = ({ children, inlineLabel, style }) => {
  return (
    <label className={inlineLabel ? "inline-label" : "label"} style={style}>
      {children}
    </label>
  );
};

export default Label;
