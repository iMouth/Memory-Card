import React from "react";
import "../styles/Win.css";

const Win = ({ size, reset }) => {
  return (
    <div id="Win">
      <div>
        <h1>You Win!</h1>
        <p>You have remembered all {size} survivor winners!</p>
        <button type="button" onClick={reset}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Win;
