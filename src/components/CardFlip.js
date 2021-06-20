import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { ImgStyled } from "../styles";
import Coded from "../Pictures/backCard.png";

const CardFlip = (props) => {
  const [isFlipped, setFlipped] = useState(props.card.flipped);
  const toggle = () => {
    setFlipped(!isFlipped);
    props.card.flipped = true;
    setTimeout(() => {
      props.mathcedCheck(props.card);
    }, 500);
  };

  return (
    <ReactCardFlip isFlipped={props.card.flipped}>
      <img src={Coded} className="frontCard" onClick={toggle}></img>
      <ImgStyled src={props.card.backImage} />
    </ReactCardFlip>
  );
};

export default CardFlip;
