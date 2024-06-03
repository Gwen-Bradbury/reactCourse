// this function dynamically changes the title and description using the props passed through from App()
// thanks to props this component is completely reusable!
export default function CoreConcept(props) {
  // the 'props' are being passed into this function from App.jsx and are the image, title and description key value pairs
  // instead of using the props keyword you can use object destructuring see comment below
  // function CoreConcept({title, description, image}) {}
  // when destructuring the keys used (title, image, description) must match the keys being passed in!!
  // - either from the other function (App() in App.jsx) or the object keys from the other file data.js depending on which is being used
  return (
    <li>
      {/* you can access the title, description and image values passed in through (props) by using props.image or props.title where appropriate */}
      {/* whatever word you used for the key that was passed in, in the other function, must match the key being used here to retrieve that value! */}
      {/* when using destructuring you can just use image title and decription rather than props.image or props.title */}
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
