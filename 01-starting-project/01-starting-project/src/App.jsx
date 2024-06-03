import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
// components are generally kept in seperate files to avoid overcrowding a file as the project gets bigger
// components from other files (like the header) need to be imported to be used
// if it's not the default export you will need to clarify which component you're importing from that file

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
            {/* the keys used here must match the keys being called as props in the other function (in this case the CoreConcept function in CoreConcept.jsx) */}
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
            {/* the spread operator (...) will pull the key value pairs from the CORE_CONCEPTS file (data.js) with index [2] and add them as key value pairs here */}
            {/* this reduces the amount of code needed but does the same as the above code */}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        {/* this section id is coming from the index.css file and is for styling */}
        <section id="examples">
          <h2>Examples</h2>
          {/* built in menu feature creates a list of buttons */}
          <menu>
            {/* this TabButton Component is written like this and the text is outputted to the browser as it's using the props.children built in feature */}
            {/* see the TabButton.jsx file!! */}
            {/* this is called component composition */}
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
