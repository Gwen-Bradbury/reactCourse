// var declares a variable.
// let and const also declare variables.
// use let to create a variable value.
// use const to create a constant value.
var myName = "Max";
console.log(myName);
myName = "Manu";
console.log(myName);

let myName = "Max";
console.log(myName);
myName = "Manu";
console.log(myName);

const myName = "Max";
console.log(myName);
myName = "Manu";
console.log(myName); // TypeError: Assignment to constant variable.
// can't reassign const variables.
