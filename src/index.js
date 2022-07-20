import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/normalize.css";
import "./index.css";
import App from "./App";

function importPictures(r) {
  let images = {};
  let size = r.keys().length;
  r.keys().map((item, index) => {
    images[index] = {
      id: index,
      name: item.replace("./", "").split(".")[0],
      src: r(item),
    };
  });
  return [images, size];
}
const [images, size] = importPictures(require.context("./assets/cards", false, /\.(png|jpe?g|svg|webp)$/));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App images={images} size={size} />);
