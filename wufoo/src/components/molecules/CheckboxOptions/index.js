import React from "react";

const CheckboxOptions = () => {
  return (
    <div className="fieldElementPadding">
      <p className="bold marginBottom_2">Options</p>
      <div className="flex dir-col">
        <div className="flex">
          <input
            type="checkbox"
            name="Required"
            value="Required"
            className="marginRight_8 inputClass"
          />
          <label for="Required">Required</label>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            id="No_Duplicates"
            name="No_Duplicates"
            value="No_Duplicates"
            className="marginRight_8 inputClass"
          />
          <label for="No_Duplicates">No Duplicates</label>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            id="Encrypted"
            name="Encrypted"
            value="Encrypted"
            className="marginRight_8 inputClass"
          />
          <label for="Encrypted">Encrypted</label>
        </div>
      </div>
    </div>
  );
};

export default CheckboxOptions;
