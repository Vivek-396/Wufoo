import React, { useState } from "react";

const InputWithLabel = ({
  title,
  onWrapperClick = () => {},
  wrapperProps = {
    wrapperClassName: "fieldElementPadding",
  },
  labelProps = { label: "", labelClassName: "bold marginBottom_2" },
  inputProps = {
    name: "singleLineText",
    className: "inputClass",
    value: "",
    readOnly: true,
  },
}) => {
  const [inputText, setInputText] = useState(inputProps.value);

  return (
    <>
      <div className={wrapperProps.wrapperClassName} onClick={onWrapperClick}>
        <p className={labelProps.labelClassName}>{title}</p>
        <input
          type="text"
          name={inputProps.name}
          className={inputProps.className}
          value={inputText}
          onChange={setInputText}
          readOnly={inputProps.readOnly}
        />
      </div>
    </>
  );
};

export default InputWithLabel;
