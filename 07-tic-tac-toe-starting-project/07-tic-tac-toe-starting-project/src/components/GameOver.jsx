export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {/* if winner is not undefined show this */}
      {winner && <p>{winner} won!</p>}
      {/* if winner is undefined (meaning it's a draw) show this */}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
