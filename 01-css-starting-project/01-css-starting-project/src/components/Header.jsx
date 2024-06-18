import logo from "../assets/logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* inline styling is passed through as an object using the style tag and key value pair */}
      {/* it also only affects the element you add it too */}
      <p
        style={{
          color: "red",
          // you cant have two words and a dash as a naming convention so you either have to wrap it as a string or use camel case
          // 'text-align': 'center'
          textAlign: "center",
        }}
      >
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
