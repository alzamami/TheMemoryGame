import { BodyStyled } from "../styles";
import CardFlip from "./CardFlip";
import { useState } from "react";
import cards from "../cards";
cards.sort(() => Math.random() - 0.5);
let cardsShuffled = cards;
const AllCards = () => {
  const [firstCard, setFirstCard] = useState(null);
  const [numberLeft, setNumberLeft] = useState(14);

  const mathcedCheck = (card) => {
    if (firstCard !== null) {
      if (firstCard.cardType === card.cardType) {
        setFirstCard(null);
        if (numberLeft === 0) {
          alert(`U did it!!`);
        } else {
          setNumberLeft(numberLeft - 2);
          alert(`Matched!! u have ${numberLeft} cards left to match`);
        }
      } else {
        card.flipped = false;
        firstCard.flipped = false;
        setFirstCard(null);
      }
    } else setFirstCard(card);
  };

  return (
    <div>
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
