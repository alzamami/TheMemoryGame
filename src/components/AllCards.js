import { BodyStyled } from "../styles";
import CardFlip from "./CardFlip";

const AllCards = (props) => {
  const cardsList = props.cards.map((card) => <CardFlip card={card} />);
  return <BodyStyled>{cardsList} </BodyStyled>;
};

export default AllCards;
