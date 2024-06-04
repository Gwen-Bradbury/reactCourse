export default function App() {
  const [isDeleting, setIsDeleting] = React.useState(false);

  function deleteHandler() {
    setIsDeleting(true);
  }

  function proceedHandler() {
    setIsDeleting(false);
  }

  return (
    <div>
      {isDeleting ? (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={proceedHandler}>Proceed</button>
        </div>
      ) : (
        ""
      )}
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
// this is how you toggle a delete button into an alert with a proceed button and back into a delete button when the proceed button is clicked
