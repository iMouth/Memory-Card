import React from "react";
import "../styles/Cards.css";

const Cards = ({ click, images }) => {
  const cards = images.map(({ id, name, src }) => {
    return (
      <button onClick={(e) => click(e, id)} className="card" key={id}>
        <div className="img">
          <img src={src} alt={"Picture of: " + name} />
        </div>
        <p>{name}</p>
      </button>
    );
  });

  return <div id="Cards">{cards}</div>;
};

export default Cards;
