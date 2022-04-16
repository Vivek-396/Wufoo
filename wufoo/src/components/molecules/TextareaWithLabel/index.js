import React from "react";

const TextareaWithLabel = ({ label = "", value = "" }) => {
  return (
    <div className="fieldElementPadding">
      <p className="bold marginBottom_2">{label}</p>
      <textarea>{value}</textarea>
    </div>
  );
};

export default TextareaWithLabel;
