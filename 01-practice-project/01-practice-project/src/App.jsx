import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  // instead of managing 4 different states we are making the states an object and managing them once
  // the figure to the left of the : is the default value
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6, // this is a percentage
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  // the inputIdentifier help us to identify which userInput is being changed (as there's 4 inputs)
  function handleChange(inputIdentifier, newValue) {
    // this needs to be based on the current state as only one field will be changing and we don't want to lose the other data
    setUserInput((prevUserInput) => {
      return {
        // ...prevUserInput are the current values stored in the inputs - we only want to update one!
        ...prevUserInput,
        // we want to set the identifier to the new updated value. The identifier is either initialInvestment, annualInvestment, expectedReturn, duration
        // the + before newValue forces that value to be a number not a string
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
