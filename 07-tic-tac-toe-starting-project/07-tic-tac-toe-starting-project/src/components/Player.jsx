import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }
  // this function is being outputted twice in App.jsx
  // when clicking player 1's edit button the input field appears but player 2's input stays hidden and vice versa
  // this is because whenever you reuse a component react creates a new isolated instance
  // so player 1 and player 2 will work completely independent of each other even though they're using the same component
  // so if the state changes when <Player /> gets called the first time the second time it gets called it won't care about that - it doesn't even know about it
  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" required />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
