import React from "react";

function App() {
  const [highlight, setHighlight] = React.useState(null);

  let cssClass;

  if (highlight === "yes") {
    cssClass = "highlight-green";
  } else if (highlight === "no") {
    cssClass = "highlight-red";
  }
  return (
    <div id="app">
      <h1 className={cssClass}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={() => setHighlight("yes")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setHighlight("no")}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
