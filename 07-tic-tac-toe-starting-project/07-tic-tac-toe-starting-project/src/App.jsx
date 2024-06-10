import Player from "./components/Player";

function App() {
  return (
    <main>
      {/* the id's game-container and players are for styling*/}
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="0" />
        </ol>
      </div>
    </main>
  );
}

export default App;
