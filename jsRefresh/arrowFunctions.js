// func myFunction {} - normal function.
// var myFunction = function - another way to write a var function.
// const myFunc = () => {} - an arrow function. Arguments go in between the () and the function in between the {}.
// arrow functions remove issues with 'this' keyword.

function printMyName(name) {
  console.log(name);
}
printMyName("Max");

const printMyName = (name) => {
  console.log(name);
};
printMyName("Max");

const printMyName = (name, age) => {
  console.log(name, age);
};
printMyName("Max", 7);

const multiply = (number) => {
  return number * 2;
};
console.log(multiply(2));
// the above can be shortened to const multiply = number => number * 2;
