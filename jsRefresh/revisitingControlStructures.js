// if statements and for loops are control structures

const password = prompt("Your password"); // promt is built in by the browser to promt the user for an input
if (password === "Hello") {
  console.log("Hello works");
} else if (password === "hello") {
  console.log("hello works");
} else {
  console.log("Access not granted");
}

// for loops execute the same piece of code multiple times
const hobbies = ["Coding", "Reading", "Drawing"];
// create a new const for every hobby in the hobbies array
for (const hobby of hobbies) {
  // this code gets executed for every value in the hobbies array!
  console.log(hobby); // this runs 3 times as theres 3 values in the hobbies array
  // Logs Coding Reading Drawing seperately
}
