import React from "react";
import Chip from "../../../ui-components/chip";

const AddElement = ({ addElement }) => {
  return (
    <>
      <h2 className="textCenter">Standard</h2>
      <div className="chipGroupPanel">
        <Chip
          label="Single Line Text"
          onClick={() => addElement("singleLineText")}
        />
        <Chip label="Checkboxes" onClick={() => addElement("checkbox")} />
        <Chip
          label="Multiple Choice"
          onClick={() => addElement("multipleChoice")}
        />
        <Chip label="Dropdown" onClick={() => addElement("dropDown")} />
      </div>
    </>
  );
};

export default AddElement;
