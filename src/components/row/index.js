import React from "react";
import "./style.scss";

const Row = ({ calssName, style = {}, children, oppositeAlign = false }) => {
  return (
    <div {...style} className={`row ${oppositeAlign && "oposite-sides"}`}>
      {children}
    </div>
  );
};

export default Row;
