import React from "react";
import "../styles/Header.css";

interface Props {
  score: number;
  highScore: number;
}

const Header = ({ score, highScore }: Props) => {
  return (
    <div id="Header">
      <h1>Survivor Winners Memory Game </h1>
      <div className="scores">
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
};

export default Header;
