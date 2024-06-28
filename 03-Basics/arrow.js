const user = {
  username: "John Doe",
  price: 999,
  //* this => current context
  welcome: function () {
    console.log(`Welcome, ${this.username}!`);
    console.log(this);
  },
};
// user.welcome()
// user.username = 'Sam'
user.welcome()

// console.log(this); //* => {}

const chai1 = function () {
  let username = "Akkal";
  //   console.log(this.username); //=>undefined
};

// chai1();
// function chai() {
//     let username= "Akkal"
//   console.log(this.username); //*this: cannot works inside a function (works only in inside object)
// }
// chai()

const chai = () => {
  let username = "Akkal";
  console.log(this); // => {}
};
// chai();

//? Explicit return
// const addTwo = (num1, num2)=>{
//     return num1 + num2;
// }

//? Implicit return
// const addTwo = (num1, num2)=>  num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) =>({username: "akkal"})

// console.log(addTwo(3, 4));

 