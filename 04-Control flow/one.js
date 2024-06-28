//? if

// const isUserLoggedIn = true;
const temp = 40;
if (temp <= 40) {
//   console.log("yes, it's true");
} else {
//   console.log("no, it's false");
}

const score = 200;
if (score >= 200) {
  let power = "fly";
//   console.log(`You have earned the power of ${power}!`);
}
// console.log(`You have earned the power of ${power}!`);


const balance = 1000;
// if (balance <= 500) console.log("test"), console.log("test2");

if (balance > 500) {
//     console.log("less than");
}
else if (balance < 750) {
//     console.log("less than 750");
} else {
//     console.log("more than 750");
}

const isUserLoggedIn = true;
const debitCard = true;
const loggedInfromGoogle = true;
const loggedInfromemail = true;

if(isUserLoggedIn && debitCard){
    console.log("allow to buy course");
}
if(loggedInfromGoogle || loggedInfromemail){
    console.log("allow to login");
}

