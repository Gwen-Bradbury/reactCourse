// Primitive values can't be edited - strings and numbers
const message = "Hello";
message = message.concat("!!!");
// Hello!!! becomes a new value and the old value is thrown away as the value is stored in the const

// this changes when dealing with objects and arrays
// objects and arrays are Reference values not Primitive!!
const hobbies = ["cooking", "Snowboarding"];
hobbies.push("Reading");
// this adds Reading to the original array

// for arrays and objects only the address of the values is stored in the const not the values
// the values are stored in memory
// the memory then changes and adds the new value (when using push) but the address doesn't change
