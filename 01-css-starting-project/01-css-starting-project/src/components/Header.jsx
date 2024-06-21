import logo from "../assets/logo.png";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      {/* inline styling is passed through as an object using the style tag and key value pair */}
      {/* it also only affects the element you add it too */}
      <p
        // style={{
        //   color: "red",
        //   // you cant have two words and a dash as a naming convention so you either have to wrap it as a string or use camel case
        //   // 'text-align': 'center'
        //   textAlign: "center",
        // }}
        // when using css classes and modules the css is scoped to the file it's being imported into
        // this css is stored as .paragraph in the Header.module.css file which is imported at the top
        // classes is what we called the import. It could have been named styles or anything relative
        className={classes.paragraph}
      >
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
