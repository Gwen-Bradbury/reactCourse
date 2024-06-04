import { useState } from "react";
// useState is a react hook

import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data";
// components are generally kept in seperate files to avoid overcrowding a file as the project gets bigger
// components from other files (like the header) need to be imported to be used
// if it's not the default export you will need to clarify which component you're importing from that file

function App() {
  // useState can only be used inside react components and can't be nested
  // it triggers rerendering by react
  // put the default value (the value you want when react is first rendered) between the ()
  // if it errors with the default value between the () you will have to use a turnary to render the conditional content like below in the return and leave it empty
  // you can store the return value in a const (the return will always be an array containing exactly 2 elements!)
  // const stateArray = useState();
  // you can use destructuring to save these two elements returned in two seperate constants
  const [selectedTopic, setSelectedTopic] = useState();
  // selectedTopic will initially be ()
  // setSelectedTopic will update selectedTopic and tell react to rerender the component the useState is in
  // selectedTopic then becomes the content connected to the button thats clicked - components, jsx, state or props

  // this function is a click function that is passed into the TabButton in the return as a prop and is triggered by the onClick on the button in TabButton.jsx
  // it takes in a prop of selectedButton which will be equal to a string of either 'Components', 'JSX', 'Props' or 'State' depending on what button was pressed
  // this selectedButton is the identifier in the <TabButton /> in the return
  function handleSelect(selectedButton) {
    // this updates the selectedTopic with the selectedButton identifier and rerenders the component
    setSelectedTopic(selectedButton);
  }
  // by default react components execute only once you need to tell react if a component should be executed again

  // this is a third way to display a piece of text ie please select a topic before the button is clicked is to use an if
  let tabContent = <p>Please select a topic</p>;
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
            {/* <CoreConcept
              title="Components"
              description="The core UI building block"
              image={componentsImg}
            /> */}
            {/* you can also pass props through that are imported from another file like this imported from data.js */}
            {/* dont forget to import ... from ... at the top of the file */}
            {/* the number in the [] is the index of the key value pair (object) you want to access */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            /> */}
            {/* the spread operator (...) will pull the key value pairs from the CORE_CONCEPTS file (data.js) with index [2] and add them as key value pairs here */}
            {/* this reduces the amount of code needed but does the same as the above code */}
            {/* <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            {/* the above code will break if one of the entries from CORE_CONCEPTS is removed */}
            {/* a better way of doing this is dynamically like below */}
            {CORE_CONCEPTS.map((conceptItem) => (
              // this map changes CORE_CONCEPTS into a jsx array and executes for every item in the array
              // it will return a component for every value in CORE_CONCEPTS
              // the key prop is so react can correctly render the list items
              // the key should be unique to each list item
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
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
            {/* you can use props.children and props that have been passed through as attributes (see above) together. 
            just use props.children and props.title in the return with (props) passed through the function */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              {/* isSelected is carrying the selectedTopic prop to TabButton.jsx
               selectedTopic is set by the handleSelect function which takes a selectedButton prop which is equal to 
               'components', 'jsx', 'props' or 'state' and tells the state which button has been pressed and sets it in selectedTopic. So 
               selectedTopic === "components" will always equal true when pressing the components button
                which is what we need to set the dynamic styling. thats why selectedTopic === "components" is being passed into isSelected*/}
              Components
            </TabButton>
            {/* this is wrapping a function within another function */}
            {/* By wrapping the execution of your event handling function with another function, it's that other function that's passed as a value to the event-handling prop. Therefore, your main function (=> handleClick in this example) does NOT get executed too early but instead only when the event occurs. */}
            {/* this allows you to  "configure" the execution of an event-dependent function (e.g., define which arguments get passed to it) */}
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
            {/* in order for the content to change dynamically when the TabButtons are changed a listener needs to be added to them - onSelect which passes through the handleSelect function as a prop to TabButton.jsx */}
            {/* for an identifier to be added in the handleSelect function we need to pass an arrow function through as a prop not just the handleSelect function like we did before */}
            {/* before the identifier - <TabButton onSelect={handleSelect}>JSX</TabButton>  */}
            {/* after the identifier - <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton> */}
            {/* the identifier goes between the handleSelect () */}
            {/* the identifier allows us to control how its called and whats going to be passed to it */}
          </menu>
          {/* this outputs either "Please select a topic" if the selectedButton hasn't been clicked yet or the updated selectedButton from the handleSelect function along with the data from EXAMPLES in data.js */}
          {/* the EXAMPLES from data.js have an identifier that must match the identifier in the TabButton onSelect inorder for the right data to be passed through */}
          {/* the square brackets specify the selectedTopic thats been updated from the TabButton and passed through the handleSelect function and matches it to the identifier in the data.js */}
          {/* this allows us to grab the values from data.js and output it using that values key */}
          {/* if we want to display a piece of text ie please select a topic before the button is clicked you can do it using a turnary (below) */}
          {/* {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {/* above says if theres no selectedTopic show Please select a topic else show the info for it */}
          {/* another way of displaying a piece of text before the button is clicked is below*/}
          {/* {!selectedTopic && <p>Please select a topic</p>} */}
          {/* the && is saying if the condition to the left of it is true output the content to the right */}
          {/* {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {/* this is the third way to output 'Please select a topic' using the if statement above the return and {tabContent} where you want it outputting */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
