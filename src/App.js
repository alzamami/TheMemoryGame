import "./App.css";
import { HeaderStyled, SubheadingStyled } from "./styles";
import cards from "./cards";
import AllCards from "./components/AllCards";

function App() {
  return (
    <div>
      <HeaderStyled>The Memory Game</HeaderStyled>
      <SubheadingStyled>
        This is a game to test your ability of Memorizing
      </SubheadingStyled>
      <AllCards cards={cards} />
    </div>
  );
}

export default App;
