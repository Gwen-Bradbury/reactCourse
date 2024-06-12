import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

// helper function
// its outside of the App function as it doesn't need access to anything inside it
function deriveActivePlayer(gameTurns) {
  // this now changes the activePlayer state based on the current gameTurns state
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "0";
  }
  return currentPlayer;
}

function App() {
  // when the state needs changing between two seperate components (in seperate files) it needs to be managed in a place that has access to both of them and can pass the info between them
  // the activePlayer and setActivePlayer state has been changed to use derived state
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  // this const holds the result of calling the deriveActivePlayer function
  // the gameTurns comes from the state above and is passed into the deriveActivePlayer as a prop
  const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSquare(rowIndex, colIndex) {
    // this switches our active player
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "0" : "X"));
    // the activePlayer and setActivePlayer state has been changed to use derived state

    // this logs what turns have taken place
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      // removed below as it now is using derived state
      // let currentPlayer = "X";
      // // if the prevTurns array is greater than 0 (as it might be an empty array if noone has had a turn yet in which case it will need to be 'X' still!)
      // // and if in the prevTurns array the first element (which is the last turn) is player 'X'
      // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      //   // then set currentPlayer to '0' - if 'X' has been it will be the first element in the list therefore it's 0's turn
      //   currentPlayer = "0";
      // }

      // we want the new value to be inserted in front of the old value so the latest turn is at the top of the list
      // and we want that new value to be an object
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
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
          turns={gameTurns}
          // activePlayerSymbol={activePlayer} - removed when state was moved from GameBoard.jsx into App.jsx
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
