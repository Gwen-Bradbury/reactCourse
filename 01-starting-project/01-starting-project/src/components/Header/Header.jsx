import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
// Styles that relate only to certain files should be stored next to thier respective files and imported directly to that file
// these styles won't only relate to the Header in this file though. If there is another header (in App.jsx for example) these styles will also apply to that header too

// this code will dynamically change the first word of the <p></p> in the header
// to be chosen randomly from the reactDescriptions array
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// functions that you want to use in other files need to be exported with the export keyword!
export default function Header() {
  // first you call reactDescriptions as thats the array of words
  // then instead of passing through an index you call the getRandomInt function which will generate an index and display the word at that index number from the array
  // the (2) is from reactDescriptions. The highest index it has is index 2
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
