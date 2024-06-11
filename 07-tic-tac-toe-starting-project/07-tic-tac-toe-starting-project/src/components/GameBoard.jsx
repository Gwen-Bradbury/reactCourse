import { useState } from "react";

const initialGameBoard = [
  [null, null, null], // this whole array is a row - the row.map grabs the nulls (which are our columns)
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   we need to pass the row and col indexes in so we know which null to update
  function handleSelectedSquare(rowIndex, colIndex) {
    // we pass a function through as we don't want to lose the initial game board we just want to update the null that's been clicked
    // prevGameBoard is passed in automatically by react
    setGameBoard((prevGameBoard) => {
      // this is how we get hold of the null value we want to change and change it to X
      //  prevGameBoard[rowIndex][colIndex] = "X";
      //  return prevGameBoard;
      // best practice states to create a copy of the board first and update the copy not update the original game board
      // this is called updating in an immutable way
      // react can update the original board even before this scheduled change which is why we create a copy and update that
      // so we don't update the original one in memory
      // this is how we do that
      // the spread operator pastes the current gameboard into a new array called updatedGameBoard
      // we need the map function to grab the nested arrays
      // innerArray refers to the 'rows' and using the spread operator grabs the values of those rows, adding them to the new updatedGameBoard array
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][colIndex] = "X";
      return updatedGameBoard;
    });
  }

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
                  onClick={() => handleSelectedSquare(rowIndex, colIndex)}
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
