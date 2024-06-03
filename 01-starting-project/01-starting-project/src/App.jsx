import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";

// this code will dynamically change the first word of the <p></p> in the header
// to be chosen randomly from the reactDescriptions array
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  /* first you call reactDescriptions as thats the array of words */
  /* then instead of passing through an index you call the getRandomInt function which will generate an index and display the word at that index number from the array */
  /* the (2) is from reactDescriptions. The highest index it has is index 2 */
  const description = reactDescriptions[getRandomInt(2)];

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

// this function dynamically changes the title and description using the props passed through from App()
// thanks to props this component is completely reusable!
function CoreConcept(props) {
  // instead of using the props keyword you can use object destructuring see comment below
  // function CoreConcept({title, description, image}) {}
  // when destructuring the keys used (title, image, description) must match the keys being passed in!!
  // - either from the other function below or the object keys from the other file data.js depending on which is being used
  return (
    <li>
      {/* you can access the title, description and image values passed in through (props) by using props.image or props.title where appropriate */}
      {/* whatever word you used for the key that was passed in, in the other function, must match the key being used here to retrieve that value! */}
      <img>
        {/* when using destructuring you can just use image title and decription rather than props.image or props.title */}
        src={props.image} alt={props.title}
      </img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* this section id is coming from the index.css file and is for styling */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* these title and description and image labels and values are props */}
            {/* theyre passed though as an object with title, description and image as the keys and the values as the values */}
            {/* the keys used here must match the keys being called as props in the other function */}
            {/* in order for the function to accept these values you need to pass them through the CoreConcept() function by adding the word 'props' into the () */}
            <CoreConcept
              title="Components"
              description="The core UI building block"
              image={componentsImg}
            />
            {/* you can also pass props through that are imported from another file like this imported from data.js */}
            {/* dont forget to import ... from ... at the top of the file */}
            {/* the number in the [] is the index of the key value pair (object) you want to access */}
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            {/* the spread operator (...) will pull the key value pairs from the CORE_CONCEPTS file with index [2] and add them as key value pairs here */}
            {/* this reduces the amount of code needed but does the same as the above code */}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
