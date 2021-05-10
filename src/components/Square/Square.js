import React from "react";
import "./square.css";

function Square({ value, onClick }) {
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;