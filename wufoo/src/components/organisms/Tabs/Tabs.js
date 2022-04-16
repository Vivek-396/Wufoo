import React from "react";
import "./index.css";

const Tabs = ({ activeTab, setTab }) => {
  const TABS = ["Add a Field", "Field Settings", "Form Settings"];
  const TABS_TO_INDEX_MAP = {
    ADD: 0,
    FIELD_SETTINGS: 1,
    FORM_SETTINGS: 2,
  };
  const INDEX_TO_TAB_MAP = {
    0: "ADD",
    1: "FIELD_SETTINGS",
    2: "FORM_SETTINGS",
  };

  return (
    <div className="tabs">
      {TABS.map((tab, index) => (
        <p
          key={`tab_${index}`}
          className={`tab ${
            TABS_TO_INDEX_MAP[activeTab] === index ? "activeTab" : ""
          }`}
          onClick={() => setTab(INDEX_TO_TAB_MAP[index])}
        >
          {tab}
        </p>
      ))}
    </div>
  );
};

export default Tabs;
