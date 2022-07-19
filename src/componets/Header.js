import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>Survivor Winners Memory Game </h1>
      <div className="scores">
        <p>Score: 3</p>
        <p>High Score: 40</p>
      </div>
    </div>
  );
};

export default Header;
