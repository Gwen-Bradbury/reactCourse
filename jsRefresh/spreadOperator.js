// the spread operator is ...

const hobbies = ["Coding", "Reading", "Drawing"];
const newHobbies = ["Photography"];
const mergedHobbies = [...hobbies, ...newHobbies];
// the 3 dots pull all the values out of the hobbies and newHobbies arrays and add them as values to the new array

const mergedHobbies2 = [hobbies, newHobbies];
// this creates a new array with hobbies and newHobbies as values and the values inside hobbies and newHobbies will become nested arrays

// you can also use ... on objects
const user = {
  name: "Max",
  age: 34,
};
const extendedUser = {
  isAdmin: true,
  ...user,
};
// the ... pulls out the key value pairs from user and adds them into the extendedUser object as key value pairs
// Logs {isAdmin: true, name: "Max", age: 34}
