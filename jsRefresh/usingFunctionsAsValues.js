// setTimeout is a built in function
function handleTimeOut() {
  console.log("Timed out");
}
setTimeout(handleTimeOut, 2000);
// when passing the handleTimeOut function through to setTimeout you don't need the ()
// this is how you pass the function as a value - you omit the ()
// adding the () makes that function run at the time the setTimeout is set
// the return value of handleTimeOut would then be the first param of the setTimeout function
// which is not what we want as we want to pass the function itself not the return value of it so it runs at some future time not at the point setTimeout is set

// the above code could also be written as below
const handleTimeout = () => {
  console.log("Timed out again");
};
setTimeout(handleTimeout, 2000);
// the number is the number of milliseconds JS waits before executing the handleTimeout function

// or it could be written stright into the setTimeout as a param
setTimeout(() => {
  console.log("Timed out three times");
}, 2000);
// even when defining the function inside the setTimeout() function, setTimeout() won't execute it until the time you pass through as the second param is up

// functions passed as values can be done to all functions!!
function greeting(greetFn) {
  // then greetFn is being called inside the funtion using the ()
  // this executes the arrow function below
  greetFn();
}
// this is getting passed as a value into greeting via the greetFn param
greeting(() => console.log("Hi"));
