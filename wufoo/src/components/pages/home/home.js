import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <Link to="/form">
          <p className="Home-link">Open Form</p>
        </Link>
      </header>
    </div>
  );
};

export default Home;
