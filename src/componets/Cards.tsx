import React from "react";
import "../styles/Cards.css";
import { ImageIF } from "../../types";

interface Props {
  click: (id: number) => void;
  images: ImageIF[];
}

const Cards = ({ click, images }: Props) => {
  const cards = images.map(({ id, name, src }) => {
    return (
      <button onClick={(e) => click(id)} className="card" key={id}>
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
