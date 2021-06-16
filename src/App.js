import "./App.css";
import {
  BodyStyled,
  CardStyled,
  HeaderStyled,
  SubheadingStyled,
} from "./styles";

function App() {
  return (
    <div>
      <HeaderStyled>The Memory Game</HeaderStyled>
      <SubheadingStyled>
        This is a game to test your ability of Memorizing
      </SubheadingStyled>
      <BodyStyled>
        <CardStyled></CardStyled>
        <CardStyled></CardStyled>
        <CardStyled></CardStyled>
        <CardStyled></CardStyled>
        <CardStyled></CardStyled>
        <CardStyled></CardStyled>
        <CardStyled></CardStyled>
        <CardStyled></CardStyled>
        <CardStyled></CardStyled>
        <CardStyled></CardStyled>
        <CardStyled></CardStyled>
        <CardStyled></CardStyled>
      </BodyStyled>
    </div>
  );
}

export default App;
