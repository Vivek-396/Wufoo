import React from "react";
import InputWithLabel from "../../molecules/InputWithLabel";
import "./index.css";

const FormDisplay = ({ titles, formState }) => {
  const wrapperProps = {
    wrapperClassName: "inputDiv",
    wrapperOnClick: formState.onClick,
  };

  return (
    <div className="formDisplay width_70 padding_12" id="formDisplay">
      <div className="formDisplayInfo" title="Click to edit.">
        <h2 className="marginBottom_5">Untitled Form</h2>
        <p>This is my form. Please fill it out. It's awesome!</p>
      </div>
      {formState &&
        formState.fields &&
        // eslint-disable-next-line array-callback-return
        formState.fields.map((item, index) => {
          if (item.type === "singleLineText") {
            return (
              <InputWithLabel
                labelProps={item.labelProps}
                inputProps={item.inputProps}
                wrapperProps={wrapperProps}
                onWrapperClick={item.onClick}
                title={titles[index]}
              />
            );
          }
        })}
    </div>
  );
};

export default FormDisplay;
