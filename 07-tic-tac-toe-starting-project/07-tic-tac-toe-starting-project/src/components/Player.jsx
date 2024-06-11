import { useState } from "react";

// is active is passed through from App.jsx and sets the active css class on the active player
export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    // this only sets setIsEditing to true - we want it to flip from true to false
    // setIsEditing(true);
    // this will check if isEditing is not true (meaning it's false) and schedule to change it to true
    // setIsEditing(!isEditing);
    // both of the above are not best practice when changing a state based on its current state
    // best practice is to pass a function as it will automatically get and guarentee the current states value as an input and change it based off that
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    // event.target.value gets the value that was entered in the onChange input field
    // and sets that value in the setPlayerName state which changes the name
    setPlayerName(event.target.value);
  }

  // this function is being outputted twice in App.jsx
  // when clicking player 1's edit button the input field appears but player 2's input stays hidden and vice versa
  // this is because whenever you reuse a component react creates a new isolated instance
  // so player 1 and player 2 will work completely independent of each other even though they're using the same component
  // so if the state changes when <Player /> gets called the first time the second time it gets called it won't care about that - it doesn't even know about it
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          // this editing of name is called two-way-binding as we're getting a value out of the input with the onChange and feeding a value back in using the value={playerName}
          <input
            type="text"
            value={playerName}
            // onChange will be triggered by keystroke and will store that trigger value as an event
            // we can pass this event through to the onChange function using the event keyword (or e)
            onChange={handleChange}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
