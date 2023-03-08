import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./componets/Header";
import _ from "lodash";
import Cards from "./componets/Cards";
import Win from "./componets/Win";
import { ImageIF } from "./../types";

interface Props {
  images: ImageIF[];
  size: number;
  localHS: number;
}

const App = ({ images, size, localHS }: Props) => {
  const EXTRA_CARDS = 5;
  const cards = _.shuffle(Array.from(Array(size).keys()));
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localHS);
  const [cardImages, setCardImages] = useState<ImageIF[]>([]);
  const [clickedCards, setClickedCards] = useState<number[]>([]);
  const [unclickedCards, setUnclickedCards] = useState<number[]>(cards);
  const [win, setWin] = useState(false);

  useEffect(() => {
    makeCards();
  }, [score]);

  const makeCards = () => {
    setCardImages(() => {
      let ret: ImageIF[] = [];
      let randomCard = _.sample(unclickedCards);
      let curCards = cards.filter((card) => card !== randomCard);

      ret.push(images[randomCard!]);
      _.shuffle(curCards);
      for (let i = 0; i < EXTRA_CARDS; i++) {
        ret.push(images[curCards[i]]);
      }
      return _.shuffle(ret);
    });
  };

  const gameReset = () => {
    sessionStorage.setItem("highScore", JSON.stringify(score > highScore ? score : highScore));
    setHighScore(() => (score > highScore ? score : highScore));
    setScore(() => 0);
    setClickedCards(() => []);
    setUnclickedCards(() => cards);
    setCardImages(() => []);
    setWin(() => false);
  };

  const success = (key: number) => {
    setScore(() => score + 1);
    setClickedCards(() => [...clickedCards, key]);
    setUnclickedCards(() => unclickedCards.filter((card) => card !== key));

    if (score + 1 === size) {
      sessionStorage.setItem("highScore", JSON.stringify(score > highScore ? score : highScore));
      setWin(() => true);
    }
  };

  const imageClick = (key: number) => {
    if (clickedCards.includes(key)) gameReset();
    else success(key);
  };

  return (
    <div id="App">
      <Header score={score} highScore={highScore} />
      {win ? <Win reset={gameReset} size={size} /> : <Cards click={imageClick} images={cardImages} />}
    </div>
  );
};

export default App;
