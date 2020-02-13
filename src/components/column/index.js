import React from "react";
import "./column.scss";

const Col = ({
  children,
  className = "",
  style = {},
  largura,
  comMargin = true
}) => {
  const larguraComponente = largura + 2 * 5.912;
  return (
    <div
      style={{
        width: larguraComponente,
        ...style
      }}
      className={`${comMargin ? "column" : className}`}
    >
      {children}
    </div>
  );
};

export default Col;
