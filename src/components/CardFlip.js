import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { DivStyled, ImgStyled } from "../styles";

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
    <ReactCardFlip isFlipped={props.card.flipped} flipDirection="horizontal">
      <DivStyled className="frontCard" onClick={toggle}></DivStyled>
      <ImgStyled src={props.card.backImage} />
    </ReactCardFlip>
  );
};

export default CardFlip;
