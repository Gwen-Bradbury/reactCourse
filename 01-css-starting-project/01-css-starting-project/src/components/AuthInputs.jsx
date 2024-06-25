import { useState } from "react";
// styled components is a third party package installed using npm install styled-components
import { styled } from "styled-components";

// styling a div using the styled-components package
// you store the css in a variable and then use the variable name inside <> </> around what code you want to style
// <controlContainer>
// <p>
//   <label className={`label ${emailNotValid ? "invalid" : ""}`}>Email</label>
//   <input
//     type="email"
//     style={{ backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db" }}
//     onChange={(event) => handleInputChange("email", event.target.value)}
//   />
// </p>
// </controlContainer>
//  you can move this css into a seperate file if needed

const controlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  // invalid is the emailNotValid prop that we sent in in the <Label></Label>
  // this sets the colour dynamically so it can be used as a conditional on the Email label
  // if invalid is true set the #f87171 else set the #6b7280
  color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({ $invalid }) => ($invalid ? "#fed2d2" : "#d1d5db")};
  color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#374151")};
  border: ${({ $invalid }) =>
    $invalid ? "1px solid #f73f3f" : "1px solid transparent"};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
// border could also be written like > border: 1px solid ${({ invalid }) => (invalid ? "#f73f3f" : "transparent")};

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      {/* this div was styled using the third party package styled-components */}
      <controlContainer>
        <p>
          {/* if an element already has a class and you want to add another conditional class you can use backticks and the ${} syntax to achive it */}
          {/* label is the hardcoded class and is the dynamically, conditionally injected class */}
          {/* <label className={`label ${emailNotValid ? "invalid" : ""}`}>
            Email
          </label> */}
          {/* using the styled component const Label from above */}
          {/* the styled Label const above is actually still a <label></label> tag thats been styled, so you can also still pass dynamic jsx code into it */}
          {/* <Label className={`label ${emailNotValid ? "invalid" : ""}`}> */}
          {/* using styled components to conditionally render styles vvv */}
          {/* we can add a prop with the value emailnotValid which will either be true or false */}
          {/* and we can use this prop in the styled.label const above to dynamically set the text colour of the <Label> */}
          {/* prefix any styling props with a $ so they won't conflict with any built in prop names!! */}
          <Label $invalid={emailNotValid}>Email</Label>
          {/* the input before we used the styled Input created above */}
          {/* <input
            type="email"
            style={{ backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db" }}
            // className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          /> */}
          {/* Input before we change to dynamic styling in the const above */}
          {/* <Input
            type="email"
            style={{ backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db" }}
            // className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          /> */}
          <Input
            type="email"
            $invalid={emailNotValid}
            // className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          {/* <Label className={`label ${emailNotValid ? "invalid" : ""}`}> */}
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            $invalid={passwordNotValid}
            // className={passwordNotValid ? "invalid" : undefined}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </controlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className="button" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
