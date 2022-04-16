import React from "react";
import FieldLabel from "../../molecules/FieldLabel";
import ChecboxOptions from "../../molecules/CheckboxOptions";
import RangeSet from "../../molecules/RangeSet";
import InputWithLabel from "../../molecules/InputWithLabel";
import TextareaWithLabel from "../../molecules/TextareaWithLabel";

const RenderFieldSettings = ({ selectedItem, titles, updateTitles }) => {
  return (
    <>
      {!!selectedItem.includes("singleLineText") && (
        <div>
          <FieldLabel titles={titles} updateTitles={updateTitles} />
          <ChecboxOptions />
          <RangeSet />
          <InputWithLabel label="Predefined value" value="" />
          <InputWithLabel label="Placeholder text" value="" />
          <TextareaWithLabel label="Instructions for user" />
          <InputWithLabel label="Add CSS layout keywords" value="" />
        </div>
      )}
    </>
  );
};

export default RenderFieldSettings;
