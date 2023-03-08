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
}

const App = ({ images, size }: Props) => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardImages, setCardImages] = useState<ImageIF[]>([]);
  const [numCards, setNumCards] = useState(4);
  const [multipler, setMultipler] = useState(1);
  const [cards, setCards] = useState(_.shuffle(Array.from(Array(size).keys())));
  const [clickedCards, setClickedCards] = useState<number[]>([]);
  const [win, setWin] = useState(false);

  useEffect(() => {
    makeCards();
  }, [score]);

  const makeCards = () => {
    setCardImages(() => {
      let ret = [...cardImages];
      const num = Math.min(numCards - ret.length, cards.length);
      for (let i = 0; i < num; i++) {
        ret.push(images[cards.pop()!]);
        setCards(() => cards);
      }
      return _.shuffle(ret);
    });
  };

  const gameReset = () => {
    setHighScore(() => (score > highScore ? score : highScore));
    setScore(() => 0);
    setClickedCards(() => []);
    setCards(() => _.shuffle(Array.from(Array(size).keys())));
    setMultipler(() => 1);
    setCardImages(() => []);
    setNumCards(() => 4);
    setWin(() => false);
  };

  const success = (key: number) => {
    setScore(() => score + 1);
    setClickedCards(() => [...clickedCards, key]);
    setCardImages(() => _.shuffle(cardImages));
    if (score + 1 === numCards) {
      setNumCards(() => numCards + multipler * 4);
      setMultipler(() => multipler + 1);
    }
    if (score + 1 === size) setWin(() => true);
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
