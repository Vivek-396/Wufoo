import React, { useEffect } from "react";
import AddElement from "../../organisms/AddElement";
import Tabs from "../../organisms/Tabs";
import RenderFieldSettings from "./RenderFieldSettings";
import "./index.css";

const Panel = ({
  addElement,
  tab,
  setTab,
  selectedItem,
  titles,
  updateTitles,
}) => {
  useEffect(() => {}, [selectedItem]);

  return (
    <>
      <Tabs activeTab={tab} setTab={setTab} />
      <div className="panel">
        {tab === "ADD" && <AddElement addElement={addElement} />}
        {tab === "FIELD_SETTINGS" && (
          <>
            <h2 className="textCenter">Field Settings</h2>
            <RenderFieldSettings
              selectedItem={selectedItem}
              titles={titles}
              updateTitles={updateTitles}
            />
          </>
        )}
        {tab === "FORM_SETTINGS" && (
          <>
            <h2 className="textCenter">Form Settings</h2>
          </>
        )}
      </div>
    </>
  );
};

export default Panel;
