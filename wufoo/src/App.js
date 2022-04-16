import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Form from "./components/pages/Form";

import "./App.css";
import "./assets/common.css";

const App = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
