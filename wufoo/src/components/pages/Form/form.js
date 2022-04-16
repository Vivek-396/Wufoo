import React, { useState } from "react";
import FormHeader from "../../molecules/FormHeader";
import FormDisplay from "../../templates/FormDisplay";
import Panel from "../../templates/Panel";
import initialValues from "./utils/initialValues";
import "./form.css";

const TABS = {
  ADD: "ADD",
  FIELD_SETTINGS: "FIELD_SETTINGS",
  FORM_SETTINGS: "FORM_SETTINGS",
};

const formInitialState = {
  formName: "Untitled Form",
  formDescription: "This is my form. Please fill it out. It's awesome!",
  fields: [],
};

const Form = () => {
  const [tab, setTab] = useState(TABS.ADD);
  const [selectedItem, setSelectedItem] = useState("");
  const [formState, setFormState] = useState(formInitialState);
  const [elementCount, setElementCount] = useState(0);
  const [titles, updateTitles] = useState([]);

  const addElement = (label) => {
    switch (label) {
      case "singleLineText": {
        setFormState({
          ...formState,
          fields: [
            ...formState.fields,
            {
              ...initialValues.singleLineText,
              index: elementCount,
              onClick: () => {
                setTab(TABS.FIELD_SETTINGS);
                setSelectedItem(`singleLineText_${elementCount}`);
              },
            },
          ],
        });
        setElementCount(elementCount + 1);
        updateTitles([...titles, "Untitled"]);
        return;
      }

      default:
        return;
    }
  };

  return (
    <div className="formContainer">
      <FormHeader
        heading="Form Header"
        subHeading="A Form Building Application"
      />
      <div className="flex relative">
        <Panel
          addElement={addElement}
          tab={tab}
          setTab={setTab}
          selectedItem={selectedItem}
          titles={titles}
          updateTitles={updateTitles}
        />
        <FormDisplay formState={formState} titles={titles} />
      </div>
    </div>
  );
};

export default Form;
