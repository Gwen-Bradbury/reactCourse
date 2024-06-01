// The different types of values are: strings, numbers, booleans, null and undefined, objects.
// null - A reset value explicitly assigned by dev.
// undefined - default if no value was assigned yet

// Variables store values
// Variables allow reusability and increase readability

// variable names should use camel case,

// var declares a variable.
// let and const also declare variables.
// use let to create a variable value.
// use const to create a constant value.
var myName = "Max";
console.log(myName);
myName = "Manu";
console.log(myName);
// var is no longer used

let myName = "Max";
console.log(myName); // logs Max
myName = "Manu";
console.log(myName); // logs Manu

const myName = "Max";
console.log(myName);
myName = "Manu";
console.log(myName); // TypeError: Assignment to constant variable.
// can't reassign const variables.
