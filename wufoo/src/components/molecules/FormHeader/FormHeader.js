import React from "react";
import "./FormHeader.css";

const FormHeader = ({ heading = "", subHeading = "" }) => {
  return (
    <div className="formHeader">
      <h1>{heading}</h1>
      <p className="font_10">{subHeading}</p>
    </div>
  );
};

export default FormHeader;
