const userEmail = [1, 2, 3];

// if (userEmail) {
//     console.log("User email is valid")
// } else{
//     console.log("User email is Invalid");
// }

//? Falsy value
//* false, 0, -0, BigInt 0n, "", null, undefined, NaN

//? Truthly value
//* true, "0", "false", " ", object{},  array[], fumctoin(){}

if (userEmail.length === 0) {
  // console.log("Array is Empty");
}
const emptyobj = {};
if (Object.keys(emptyobj).length === 0) {
  // console.log("object is empty");
}

//? Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 =5 ?? 10//* 5
// val1 = null ?? 10 //* 10
// val1 = undefined ?? 10 //* 10
// val1 = null ?? 10 ?? 20 //* 10

// console.log(val1);

//? ternary operator

// condition ? true_value: false_value
const tea = 20;
tea <= 40 ? console.log("less than 40") : console.log("more than 40");
