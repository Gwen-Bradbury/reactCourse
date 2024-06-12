import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null], // this whole array is a row - the row.map grabs the nulls (which are our columns)
  [null, null, null],
  [null, null, null],
];

// we need a list of all the winning combinations
// below is a part of that to see what it should look like - the rest is in winning-combinations.js and will be imported
// const WINNING_COMBINATIONS = [
//   [
//     // where the row and column overlap is the square thats chosen - in this case its the top left!
//     // indexes start at 0!!
//     {
//       row: 0,
//       col: 0,
//     },
//     {
//       row: 0,
//       col: 1,
//     },
//     {
//       row: 0,
//       col: 2,
//     },
//     // the three above make a winning combination on the top row
//   ],
// ];

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

  // this should be called whenever we click the save button in the player component
  const [players, setPlayers] = useState({
    X: "Player 1",
    0: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  // as all the data is derived from this gameTurns state when we reset gameTurns back to an empty array by clicking the rematch button
  // everything else should automatically adjust

  // this const holds the result of calling the deriveActivePlayer function
  // the gameTurns comes from the state above and is passed into the deriveActivePlayer as a prop
  const activePlayer = deriveActivePlayer(gameTurns);

  // this map makes a deep copy of the initialGameBoard array and all it's nested arrays so we don't update the original array in memory!
  // instead we update the brand new array which is a copy of the original
  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  // this App component rerenders every time a button is clicked due to handleSelectSquare so we don't need to manage state to see if there's a winner after every turn
  // we will derive whether we have a winner or not from our gameTurns
  let winner; // its undefined to start
  // first we loop over all our winning combinations whenever the App component rerenders
  for (const combination of WINNING_COMBINATIONS) {
    // gameBoard is our current initialGameBoard (the one thats being played and updated)
    // combination[0] is the first line of the combinations from our WINNING_COMBINATIONS data (on the first itteration) and .row is extracting the row from it
    // we do the same for the col to get the first square
    // this takes us through the different squares that make up one winning combination and looks at the symbols stored in them
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    // now we need to check if all the symbols in the squares are equal ie theyre all 0's or all X's
    // first check it's not null (so check if it's truthy as null is falsey) - if it's null you don't need to check it against the winning combinations
    // then check the first square value is equal to the second
    // then check the first square value is equal to the third
    // if that's the case we have a winner
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      // we can use this to conditionally render a winner screen
      // if winner is not undefined show ....
      // if we want to show the winners symbol
      // winner = firstSquareSymbol;
      // if we want to show the winners name
      // players is from the state above so it sets the players state to the winning symbol
      winner = players[firstSquareSymbol];
    }
  }

  // its a draw if there's been 9 turns and winner is still undefined
  const hasDrawn = gameTurns.length === 9 && !winner;

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

  function handleRestart() {
    // this sets the setGameTurns to an empty array
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    // we want to change the state based on the old state so only one player name changes - the one we're editing
    // and we don't want to lose the information from the other persons name
    setPlayers((prevPlayers) => {
      // returns new object which will be the new players state which i'll spread my old players state into
      // this will set the X and 0 to the respective old player names
      return {
        ...prevPlayers,
        // this then overwrites the old name and sets the symbol to the new name
        [symbol]: newName,
      };
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
            onChangeName={handlePlayerNameChange}
          />
          {/* this player is active if activePlayer state is an '0' */}
          <Player
            initialName="Player 2"
            symbol="0"
            isActive={activePlayer === "0"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {/* if winner is truthy (therefore not undefined as undefined is falsey) */}
        {/* or if hasDrawn is truthy */}
        {/* put () round winner || hasDrawn to make sure it's checked first */}
        {/* then show gameOver screen */}
        {(winner || hasDrawn) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        {/* activePlayer also needs to be passed to the gameBoard as thats the symbol of the player thats currently active and needs to be placed on the square that was clicked */}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
          // turns={gameTurns} - removed when gameBoard logic was moved from GameBoard.jsx
          // activePlayerSymbol={activePlayer} - removed when state was moved from GameBoard.jsx into App.jsx
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
