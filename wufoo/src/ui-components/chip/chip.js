import React from "react";
import "./index.css";

const Chip = ({ label = "", onClick = () => {} }) => {
  return (
    <div className="chip" onClick={onClick}>
      {label}
    </div>
  );
};

export default Chip;
