import { useState } from "react";
import cards from "../cards";

const CardFlip = (props) => {
  const [isFlipped, setFlipped] = useState(false);
  const toggle = () => {
    //if user flipped it it cant be unflipped
    if (!isFlipped) setFlipped(!isFlipped);
  };

  const randomItem = cards[Math.floor(Math.random() * cards.length)];

  return (
    <div className={isFlipped ? "backCard" : "frontCard"} onClick={toggle}>
      {console.log(randomItem)}
      <h1>{randomItem.id}</h1>
    </div>
  );
};

export default CardFlip;
