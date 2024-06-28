let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  // console.log(a); //* 10
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "akkal";

  function two() {
    const website = "youtube";
    console.log(username);
  }
//   console.log(website);
//   two();
}
// one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    // console.log(username + website);
  }
  //   console.log(website); //* error
//   console.log(username);
}
// console.log(username); //* error



  //?          interesting

// console.log(addone(5)) //* can use before declaration
function addone(num){
    return num + 1
}

// addtwo(5) //* cannot use before declaration
const addtwo = function addone(num){
    return num + 2
}