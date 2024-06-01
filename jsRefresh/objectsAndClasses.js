// objects group mulitple values together
// objects have properties with key value pairs

const user = {
  name: "Max",
  age: 34,
};
console.log(user); // Logs {name: Max, age: 34}
console.log(user, age); // Logs 34
// the . is the key to accessing values in the object

// objects can store functions which we call methods
const fullUser = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello");
  },
};
fullUser.greet(); // Logs Hello

// you can use the this keyword to access other values inside the object
const fullUser2 = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello");
    console.log(this.age); // this refers to this function its in. The fullUser2 function is what this is.
  },
};
fullUser2.greet(); // Logs Hello 34

// you can create objects using blueprints with the class keyword
// class names should start with a capital letter
class User {
  greet() {
    console.log("Hello");
  }
}

// you can add constructors using the constructor keyword to classes
// the constructor is used to accept input values and parameters
// the this keyword stores the input values and params as properties of the object that will be created based off the class blueprint
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hello");
  }
}

// once we've created our class we need to instanciate it using the new keyword
const user1 = new User("Manuel", 35); // creates a new user object named user1 based on the User class
console.log(user1); // Logs User {name: Manuel, age: 35, constructor: Object}
user1.greet(); // Logs "Hello"
