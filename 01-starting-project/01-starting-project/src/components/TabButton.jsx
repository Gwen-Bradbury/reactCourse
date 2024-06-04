// to use object destructuring with props.children you just use
// export default function TabButton({children}) {} then just using <button>{children}</button> in the return
export default function TabButton(props) {
  // functions defined here are only accessable within this TabButton function
  // functions defined here also have access to the props passed in through the TabButton function
  // this function is a click function that can be passed into the button in the return like so
  //   function handleClick() {
  //     console.log("Hello world!");
  //   }
  // <button onClick={handleClick}>{props.children}</button>
  // the name in the {} of the onClick must match the name of the function it's calling
  // don't add the () after handleClick as the () is what uses the function and we don't want to use it until the button is clicked

  return (
    <li>
      {/* this children prop is set by react. It doesn't take attributes (keys and values passed through like normal props) */}
      {/* this props.children allows you to put content between an opening and closing tag where you're calling this function */}
      {/* the content could be text or jsx structure */}
      <button onClick={props.onSelect}>{props.children}</button>
      {/* the onSelect prop that carries the handleSelect funtion from App.jsx is triggered using the onClick function on the button */}
      {/* this is how functions are passed through and triggered in different files */}
    </li>
  );
}
