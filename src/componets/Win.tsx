import React from "react";
import "../styles/Win.css";

interface Props {
  size: number;
  reset: () => void;
}

const Win = ({ size, reset }: Props) => {
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
