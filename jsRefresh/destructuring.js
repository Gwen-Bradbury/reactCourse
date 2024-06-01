// destructuring arrays
const userNameData = ["Gwen", "Bradbury"];
const firstName = userNameData[0];
const lastName = userNameData[1];
// this code can be shortened
const [firstName2, lastName2] = ["Gwen", "Bradbury"];
// the square brackets on the left of the = destructure (pull the values out by position) of the array on the right side of the =
console.log(firstName2); // Logs Gwen
console.log(lastName2); // Logs Bradbury

// can also use destructuring with objects
const user = {
  name: "Max",
  age: 34,
};
const name = user.name;
const age = user.age;
// this can be shortened to
const { name2, age2 } = {
  // the property names passed into the {} on the left of the = must match the key in the object when destructing objects!
  name2: "Max",
  age2: 34,
};
console.log(name2); // Logs Max
console.log(age); // Logs 34

// unlike with arrays the values are pulled out by the object key not their position which is why the property names must match the object keys!
// if you want to change a propery name use an alis - const { name2: userName, age2 } = {} then you can call userName instead of name2

// use {} for destructuring objects and [] for arrays

// The destructuring syntax explained above can also be used in function parameter lists.
// For example, if a function accepts a parameter that will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables (i.e., variables only available inside the function body).
// Here's an example:

// function storeOrder(order) {
//   localStorage.setItem('id', order.id);
//   localStorage.setItem('currency', order.currency);
// }
// Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:
// function storeOrder({id, currency}) { // destructuring
//   localStorage.setItem('id', id);
//   localStorage.setItem('currency', currency);
// }
// The destructuring syntax is the same as taught in the previous lecture - just without creating a constant or variable manually.
// Instead, id and currency are "pulled out" of the incoming object (i.e., the object passed as an argument to storeOrder).
// It's very important to understand, that storeOrder still only takes one parameter in this example! It does not accept two parameters. Instead, it's one single parameter - an object which then just is destructured internally.
// The function would still be called like this:
// storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!
