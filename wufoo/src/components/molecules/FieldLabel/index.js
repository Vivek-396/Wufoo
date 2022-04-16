import React, { useState } from "react";

const FieldLabel = ({ fieldName = "Untitled", titles, updateTitles }) => {
  const [inputValue, setValue] = useState(fieldName);
  return (
    <div className="fieldElementPadding">
      <label className="bold marginBottom_2">Field Label</label>
      <textarea name="textArea" className="textAreaForm" onClick={setValue}>
        {inputValue}
      </textarea>
    </div>
  );
};

export default FieldLabel;
