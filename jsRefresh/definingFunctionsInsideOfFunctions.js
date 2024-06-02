function init() {
  const message = "...";
  // message is only available to use inside init() due to scope
  function greet() {
    console.log("hi");
  }
  greet();
  // greet can be exectued inside of init() but not outside due to scope
}
init(); // can be called anywhere as its scoped to the overall file
// Logs hi as init() is being called which calls greet() which is the function defined inside that logs hi
