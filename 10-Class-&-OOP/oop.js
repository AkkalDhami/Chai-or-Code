//? The main aim of OOP is to bind together the data and the functions

//? Abstraction : hides unnecessary details from the user, exposing only the essential parts of an object.

//? Encapsulation:  is defined as the wrapping up of data under a single unit.

//? Inheritance : allows a class to inherit methods and properties from another class

//? Polymorphism : ability of a message to be displayed in more than one form.

const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);  //*=> {}

function User(username, password, isLoggedIn) {
  this.username = username;
  this.password = password;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Hello, ${this.username}!`);
  };
  return this;
}

//? new => {}

const getUserDetails1 = new User("aavash", "3215", true);
const getUserDetails2 = new User("akkal", "32sd15", false);

// console.log(getUserDetails1.isLoggedIn);
console.log(getUserDetails1.constructor); //? [Function: User]
// console.log(getUserDetails2);
