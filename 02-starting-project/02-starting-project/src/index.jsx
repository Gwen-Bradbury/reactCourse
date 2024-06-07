import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
// you don't have to use JSX to build a react project.
// if you don't use JSX you don't need a build process!
// we can recreate this line without jsx
ReactDOM.createRoot(entryPoint).render(<App />);
// without jsx vvv
// ReactDOM.createRoot(entryPoint).render(React.createElement(App));
