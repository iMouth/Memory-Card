import React from "react";
import "../styles/Header.css";

const Header = ({ score, highScore }) => {
  return (
    <div className="Header">
      <h1>Survivor Winners Memory Game </h1>
      <div className="scores">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
};

export default Header;
