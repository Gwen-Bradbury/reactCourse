import { useState } from "react";

export default function UserInput() {
  // instead of managing 4 different states we are making the states an object and managing them once
  // the figure to the left of the : is the default value
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6, // this is a percentage
    duration: 10,
  });

  // the inputIdentifier help us to identify which userInput is being changed (as there's 4 inputs)
  function handleChange(inputIdentifier, newValue) {
    // this needs to be based on the current state as only one field will be changing and we don't want to lose the other data
    setUserInput((prevUserInput) => {
      return {
        // ...prevUserInput are the current values stored in the inputs - we only want to update one!
        ...prevUserInput,
        // we want to set the identifier to the new updated value. The identifier is either initialInvestment, annualInvestment, expectedReturn, duration
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initailInvestment", event.target.value)
            }
            // the value keyword sets what value is going to be displayed in the input - we want it to display the updated userInput
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
