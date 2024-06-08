export default function Tabs({ children, buttons, buttonsContainer }) {
  // We can't just replace <menu></menu> with <buttonsContainer></buttonsContainer> so react will look for a built in buttonsContainer which doesn't exist
  // so we need to store it in a variable with a capital letter as the first letter
  // you could've also just passed the prop buttonsContainer through with a capital B
  const ButtonsContainer = buttonsContainer;
  // buttonsContainer will replace the <menu></menu> tags to whatever is passed in via the buttonsContainer prop
  return (
    <>
      {/* now react is looking at the value of ButtonsContainer not a built in buttonsContainer */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {/* <menu>{buttons}</menu> */}
      {children}
    </>
  );
}
