import React from "react";

const RangeSet = () => {
  return (
    <div className="fieldElementPadding">
      <p className="bold marginBottom_2">Range</p>
      <div className="flex alignCenter">
        <label>Min</label>
        <input type="number" className="maxWidth_80 marginRange inputClass" />
        <label>Max</label>
        <input type="number" className="maxWidth_80 marginRange inputClass" />
      </div>
    </div>
  );
};

export default RangeSet;
