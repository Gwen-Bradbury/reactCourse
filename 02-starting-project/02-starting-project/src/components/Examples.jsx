import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    // replacing the html <section></section> tags with our own custom Section function
    // <section id="examples">
    // examples comes from the css and needs carrying across to Section.jsx using proxy props (also called forwarded props)
    <Section title="Examples" id="examples">
      {/* <h2>Examples</h2> */}
      {/* this is imported from Tabs.jsx and is a wrapper for all the <TabButton/>'s and the tabContent */}
      {/* we can pass through the <TabButton/>'s using the buttons prop in the <Tabs/> */}
      <Tabs
        // we want to pass <menu></menu> through this buttonsContainer prop into Tabs.jsx but you can pass <div></div> or even the custom <Section></Section>
        // however if what youre passing in is custom you will need {} with no <> eg {Section}
        // if you pass through a prop with a capital first letter ie ButtonsContainer you won't need to store it as a const to use it
        buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
              // if youre using forwarded props here you'd change the onSelect to onClick={() => handleSelect("components")}
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
          </>
        }
      >
        {tabContent}
      </Tabs>
      {/* <menu> */}
      {/* these have been passed into the Tabs.jsx wrapper using the buttons prop */}
      {/* <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleSelect("components")}
          // if youre using forwarded props here you'd change the onSelect to onClick={() => handleSelect("components")}
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
        </TabButton> */}
      {/* </menu> */}
      {/* {tabContent} */}
    </Section>
    // </section>
  );
}
