import { BodyStyled } from "../styles";
import CardFlip from "./CardFlip";
import { useState } from "react";
import cards from "../cards";
cards.sort(() => Math.random() - 0.5);
let cardsShuffled = cards;
const AllCards = () => {
  const [firstCard, setFirstCard] = useState(null);
  const [numberLeft, setNumberLeft] = useState(14);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [successfulAttempts, setSuccessfulAttempts] = useState(0);

  const mathcedCheck = (card) => {
    if (firstCard !== null) {
      if (firstCard.cardType === card.cardType) {
        setFirstCard(null);
        if (numberLeft === 0) {
          alert(`U did it!!`);
        } else {
          setNumberLeft(numberLeft - 2);
          alert(`Matched!! u have ${numberLeft} cards left to match`);
          setSuccessfulAttempts(successfulAttempts + 1);
        }
      } else {
        card.flipped = false;
        firstCard.flipped = false;
        setFirstCard(null);
        setFailedAttempts(failedAttempts + 1);
      }
    } else setFirstCard(card);
  };

  return (
    <div>
      <div className="Attempts">
        <div className="Attempts1">
          <h3>Failed Attempts: {failedAttempts}</h3>
        </div>
        <div className="Attempts1">
          <h3>Successful Attempts: {successfulAttempts}</h3>
        </div>
      </div>
      <BodyStyled>
        {cardsShuffled.map((card) => (
          <CardFlip
            card={card}
            mathcedCheck={mathcedCheck}
            status={card.flipped}
          />
        ))}
      </BodyStyled>
    </div>
  );
};

export default AllCards;
