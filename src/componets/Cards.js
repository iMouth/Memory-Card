import React from "react";
import "../styles/Cards.css";

const Cards = () => {
  function importPictures(r) {
    let images = {};
    let size = r.keys().length;
    r.keys().map((item, index) => {
      images[index] = {
        name: item.replace("./", "").split(".")[0],
        src: r(item),
      };
    });

    return [images, size];
  }

  const [images, size] = importPictures(require.context("../assets/cards", false, /\.(png|jpe?g|svg|webp)$/));

  const cards = Object.keys(images).map((index) => {
    return (
      <button className="card">
        <div className="img">
          <img src={images[index].src} alt={"Picture of: " + images[index].name} />
        </div>
        <p>{images[index].name}</p>
      </button>
    );
  });

  return <div className="card-container">{cards}</div>;
};

export default Cards;
