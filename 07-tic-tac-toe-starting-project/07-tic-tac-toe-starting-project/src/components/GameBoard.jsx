// import { useState } from "react";

// this code has been moved up to App.jsx as the logic is needed in there
// const initialGameBoard = [
//   [null, null, null], // this whole array is a row - the row.map grabs the nulls (which are our columns)
//   [null, null, null],
//   [null, null, null],
// ];

// these props are passed through from App.jsx - activePlayerSymbol was removed as a prop when we moved the state up to App.jsx
// turns was removed as a prop when the logic gameBoard was moved up to App.jsx
export default function GameBoard({ onSelectSquare, board }) {
  // this code has been moved up to App.jsx as the logic is needed in there
  //   // gameBoard is a computed value that has been derived from some state, in this case it's from the gameTurns state in App.jsx
  //   let gameBoard = initialGameBoard;

  //   // we want to loop over the turns prop
  //   // if turns is an empty array this wont do anything
  //   for (const turn of turns) {
  //     // square and player are passed in with turns as the turns prop is an object with square and player properties
  //     // this code is pulling Square and player out of the prop
  //     const { square, player } = turn;
  //     // this code is pulling the nested row and col from the square thats just been pulled out of the turns prop
  //     const { row, col } = square;
  //     // now we update the gameBoard row and col with the player symbol
  //     gameBoard[row][col] = player;
  //     // this is called deriving state from props
  //   }

  // this information was needed in the Log.jsx component so we moved the state to App.jsx as that has access to both the GameBoard and the Log
  //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   //   we need to pass the row and col indexes in so we know which null to update
  //   function handleSelectedSquare(rowIndex, colIndex) {
  //     // we pass a function through as we don't want to lose the initial game board we just want to update the null that's been clicked
  //     // prevGameBoard is passed in automatically by react
  //     setGameBoard((prevGameBoard) => {
  //       // this is how we get hold of the null value we want to change and change it to X
  //       //  prevGameBoard[rowIndex][colIndex] = "X";
  //       //  return prevGameBoard;
  //       // best practice states to create a copy of the board first and update the copy not update the original game board
  //       // this is called updating in an immutable way
  //       // more info at https://academind.com/tutorials/reference-vs-primitive-values
  //       // react can update the original board even before this scheduled change which is why we create a copy and update that
  //       // so we don't update the original one in memory
  //       // this is how we do that
  //       // the spread operator pastes the current gameboard into a new array called updatedGameBoard
  //       // we need the map function to grab the nested arrays
  //       // innerArray refers to the 'rows' and using the spread operator grabs the values of those rows, adding them to the new updatedGameBoard array
  //       const updatedGameBoard = [
  //         ...prevGameBoard.map((innerArray) => [...innerArray]),
  //       ];
  //       // the 'X' is replaced with activePlayerSymbol thats passed through as a prop from App.jsx
  //       // updatedGameBoard[rowIndex][colIndex] = "X";
  //       // now the X will change to a Y when its the second players turn
  //       updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updatedGameBoard;
  //     });
  //     // this function is passed through as a prop from App.jsx and is called with the handleSelectedSquare function
  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {/* this map maps over the three inner arrays (the ones with the nulls inside) - our 'rows' */}
      {/* the gameBoard was updated to use the let gameBoard = ... when the state was moved from here to App.jsx */}
      {/* {gameBoard.map((row, rowIndex) => () was changed to {board.map((row, rowIndex) => () when the gameBoard logic was moved to App.jsx */}
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* this map maps over the null values in each of the 3 row arrays (the nulls) - our 'columns' */}
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* the onClick needs to pass through a function so we can pass the rowIndex and colIndex to the function */}
                <button
                  // this is how it looked before we moved the state up
                  //  onClick={() => handleSelectedSquare(rowIndex, colIndex)}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
