function sayMyname() {
  console.log("A");
  console.log("K");
  console.log("K");
  console.log("A");
  console.log("L");
}
// sayMyname()

function sum1(a, b) {
  console.log(a + b);
}
// sum1(39, 4)

function add(x, y) {
  return x + y;
}

const result = add(89, 4);
// console.log(result)

function sum(a, b) {
  // let result1 = a + b;
  // return result1;
  return a + b;
}
const result1 = sum(2, 4);
// console.log(result1)

function loginuserMessage(username) {
  if (!username) {
    console.log("Please enter your username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(loginuserMessage("Akkal"))
// console.log(loginuserMessage()) //* => undefined

function calculateCartPrice(val1, val2, ...num1) {
  //* ... => rest operator
  return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 300))

const user = {
  username: "akkal",
  email: "akkal@gmail.com",
};
function handleobj(anyobject) {
  console.log(
    // `username is ${anyobject.username} and email is ${anyobject.email}`
  );
}
handleobj(user);
// handleobj({
//     username:"akkal",
//     email:"akkal@gmail.com"
// })


const arr = [200, 400, 100, 600];
function returnsecValue(getarary) {
  return getarary[2];
}
// console.log(returnsecValue(arr));
// console.log(returnsecValue([200, 400, 1000]));


function sum(x, y) {
  s = x + y;
  return s;
}
console.log(sum(2, 3));

function mul(a, b) {
  // console.log(a * b);
}
// mul(2,3)
