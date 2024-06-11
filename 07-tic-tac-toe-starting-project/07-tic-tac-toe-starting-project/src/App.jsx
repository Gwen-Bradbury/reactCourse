import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  // when the state needs changing between two seperate components (in seperate files) it needs to be managed in a place that has access to both of them and can pass the info between them
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    // this switches our active player
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "0" : "X"));
  }

  return (
    <main>
      {/* the id's game-container and players are for styling*/}
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* this player is active if activePlayer state is an 'X' */}
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          {/* this player is active if activePlayer state is an '0' */}
          <Player
            initialName="Player 2"
            symbol="0"
            isActive={activePlayer === "0"}
          />
        </ol>
        {/* activePlayer also needs to be passed to the gameBoard as thats the symbol of the player thats currently active and needs to be placed on the square that was clicked */}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
