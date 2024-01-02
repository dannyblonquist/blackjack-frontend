import { useState } from "react";

import "../../styles/game.scss";

const Game = () => {
  const [playerCardOne, setPlayerCardOne] = useState("");
  const [playerCardTwo, setPlayerCardTwo] = useState("");
  const [dealerCard, setDealerCard] = useState("");
  const [suit, setSuit] = useState("");
  const [suitCardTwo, setSuitCardTwo] = useState("");
  const [suitCardThree, setSuitCardThree] = useState("");
  const [message, setMessage] = useState("");

  const cards = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  const suits = ["♠", "♣", "♥", "♦"];

  const randomCard = () => {
    return cards[Math.floor(Math.random() * cards.length)];
  };

  const randomSuit = () => {
    return suits[Math.floor(Math.random() * suits.length)];
  };

  const handleNewHand = () => {
    setDealerCard(randomCard);
    setPlayerCardOne(randomCard);
    setPlayerCardTwo(randomCard);
    setSuit(randomSuit);
    setSuitCardTwo(randomSuit);
    setSuitCardThree(randomSuit);
  };

  const handleHit = () => {
    const playerCards = [playerCardOne, playerCardTwo];

    const totalValue = playerCards.reduce((total, card) => {
      if (card === "A") {
        return total + 11;
      } else if (card === "J" || card === "Q" || card === "K") {
        return total + 10;
      } else {
        return total + parseInt(card);
      }
    }, 0);
  };

  return (
    <div className="game-page-wrapper">
      <div className="game-container">
        <button onClick={handleNewHand}>New Hand</button>
        <div className="table">
          <div className="dealer-cards">
            <div className="dealer-card">
              {dealerCard}
              {suit}
            </div>
          </div>
          <div className="player-cards">
            <div className="player-card-one">
              {playerCardOne}
              {suitCardTwo}
            </div>
            <div className="player-card-two">
              {playerCardTwo}
              {suitCardThree}
            </div>
          </div>
        </div>

        <div className="decisions">
          <button>Double</button>
          <button onClick={handleHit}>Hit</button>
          <button>Stand</button>
          <button>Split</button>
        </div>

        <div className="message-correct">{message}</div>
      </div>
    </div>
  );
};
export default Game;
