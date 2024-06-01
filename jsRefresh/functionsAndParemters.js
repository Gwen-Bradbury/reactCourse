// can be created with function keyword or () => {} arrow syntax
// functions are pieces of code not executed immediately but at some point in the future
// you execute the function by calling it
// functions should be named based on what they do

function greet() {
  console.log("Hello!");
} // this defines the function
greet(); // this invokes (calls) the function and makes it run. Logs Hello

// parameters are input values that sit inside the ()
// the parameters will only be available inside the function
function greet(userName, message) {
  console.log(userName);
  console.log(message);
}
greet("Max", "Hello");
greet("Paula", "Hi");
// logs Max Hello Paula Hi

// you can assign default values to parameters using the = sign
// the default value is used when a value isn't given as a parameter and is overwritten when a value is given by the given value
function greet(userName, message = "Hello") {
  console.log(userName);
  console.log(message);
}
greet("Max"); // no second value is given. Logs Max Hello
greet("Paula", "Hi"); // second value is given. Default is overwritten. Logs Paula Hi

// functions can also return values
function createGreeting(userName, message = "Hello") {
  return "Hi. I am " + userName + "." + message;
}
createGreeting("Max"); // this will no longer output to the terminal as its being returned
console.log(createGreeting("Max")); // Logs Hi. I am Max.Hello

// you can store function returns in consts
function createGreeting(userName, message = "Hello") {
  return "Hi. I am " + userName + "." + message;
}
const greeting1 = createGreeting("Max");
console.log(greeting1); // Logs Hi. I am Max.Hello
