// to use object destructuring with props.children you just use
// export default function TabButton({children}) {} then just using <button>{children}</button> in the return
export default function TabButton(props) {
  return (
    <li>
      {/* this children prop is set by react. It doesn't take attributes (keys and values passed through like normal props) */}
      {/* this props.children allows you to put content between an opening and closing tag where you're calling this function */}
      {/* the content could be text or jsx structure */}
      <button>{props.children}</button>
    </li>
  );
}
