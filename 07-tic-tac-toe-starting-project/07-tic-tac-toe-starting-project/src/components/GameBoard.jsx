const initialGameBoard = [
  [null, null, null], // this whole array is a row - the row.map grabs the nulls (which are our columns)
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {/* this map maps over the three inner arrays (the ones with the nulls inside) - our 'rows' */}
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {/* this map maps over the null values in each of the 3 row arrays (the nulls) - our 'columns' */}
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
