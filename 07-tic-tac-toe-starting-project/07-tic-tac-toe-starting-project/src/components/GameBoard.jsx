// import { useState } from "react";

const initialGameBoard = [
  [null, null, null], // this whole array is a row - the row.map grabs the nulls (which are our columns)
  [null, null, null],
  [null, null, null],
];

// these props are passed through from App.jsx - activePlayerSymbol was removed as a prop when we moved the state up to App.jsx
export default function GameBoard({ onSelectSquare }) {
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
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* this map maps over the null values in each of the 3 row arrays (the nulls) - our 'columns' */}
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* the onClick needs to pass through a function so we can pass the rowIndex and colIndex to the function */}
                <button
                  // this is how it looked before we moved the state up
                  //  onClick={() => handleSelectedSquare(rowIndex, colIndex)}
                  onClick={onSelectSquare}
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
