// useState import now belongs in Examples.jsx
// import { useState, Fragment } from "react";

import Header from "./components/Header/Header.jsx";
// these 2 now belong in CoreConcepts.jsx
// import { CORE_CONCEPTS } from "./data.js";
// import CoreConcept from "./components/CoreConcept.jsx";
// these 2 now belong in Examples.jsx
// import TabButton from "./components/TabButton.jsx";
// import { EXAMPLES } from "./data.js";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  // all this now belongs in Examples.jsx
  // const [selectedTopic, setSelectedTopic] = useState();
  // function handleSelect(selectedButton) {
  //   setSelectedTopic(selectedButton);
  // }
  // let tabContent = <p>Please select a topic.</p>;
  // if (selectedTopic) {
  //   tabContent = (
  //     <div id="tab-content">
  //       <h3>{EXAMPLES[selectedTopic].title}</h3>
  //       <p>{EXAMPLES[selectedTopic].description}</p>
  //       <pre>
  //         <code>{EXAMPLES[selectedTopic].code}</code>
  //       </pre>
  //     </div>
  //   );
  // }

  return (
    // JSX elements must have one parent element in the return
    // the topmost div is the parent element
    // if you didn't want to render another element to be the parent you can use a <Fragment></Fragment>
    // Fragment needs to be imported from react
    // <div>
    // <Fragment>
    // you can also just use <> </>
    <>
      <Header />
      <main>
        {/* this core concepts section should be in its on component */}
        {/* so we've moved it out into CoreConcepts.jsx */}
        {/* copy and paste it across and remove it's imports from App.jsx */}
        {/* don't forget to add the new CoreConcepts import to the top! */}
        {/* <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section> */}
        {/* this outputs the new CoreConcepts function from CoreConcepts.jsx */}
        <CoreConcepts />
        {/* this examples section should be in it's own component */}
        {/* so we've moved it out into Examples.jsx */}
        {/* copy and paste it across and remove it's imports and functions from App.jsx */}
        {/* don't forget to add the new Examples import to the top! */}
        {/* <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section> */}
        {/* this outputs the new Examples function from Examples.jsx */}
        <Examples />
      </main>
    </>
    // </Fragment>
    // </div>
  );
}

export default App;
