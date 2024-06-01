// An array is a list of values and can be access via their position in the list (thier index)
// Arrays can contain any types of values including other arrays (known as nested arrays)

const hobbies = ["Coding", "Cooking", "Reading"];
console.log(hobbies[0]); // Logs Coding
console.log(hobbies[1]); // Logs Cooking
console.log(hobbies[2]); // Logs Reading
// indexes start at 0

// Arrays have built in utility methods
// access the methods using the .
hobbies.push("Drawing"); // adds Drawing to the hobbies array
// Logs ["Coding", "Cooking", "Reading", "Drawing"]

const index = hobbies.findIndex((item) => {
  return item === "Coding"; // if looking for the index of "Coding"
});
// this function compares every item in the array to see if it is equal to "Coding" and returns the index of the item that is equal (or makes the statement true)
console.log(index); // Logs 0 as thats the index of the item that is equal to "Coding" making the statement true

// the above code can be shortened to
const index1 = hobbies.findIndex((item) => item === "Coding");

// map transforms every item in an array to another item
// it also compares every item in the array
const editedHobbies = hobbies.map((item) => item + "!"); // adds an ! to every item in the array and adds the changed items to a new array.
// the origional array remains unchanged with map
console.log(editedHobbies); // Logs ["Coding!", "Cooking!", "Reading!", "Drawing!"]

// you can turn an array value into an object using map
const editedHobbies1 = hobbies.map((item) => ({ text: item })); // text is the key. item is the array value that becomes the object value
console.log(editedHobbies1); // Logs 0: Object v text: "Coding", 1: Object v text: "Cooking", 2: Object v text: "Reading", 3: Object v text: "Drawing"
