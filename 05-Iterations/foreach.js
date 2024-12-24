const coding = ["js", "py", "cpp", "ruby"];

coding.forEach(function (item) {
  // console.log(item)
});

coding.forEach((hello) => {
    // console.log(hello)
  });



coding.forEach((hello) => {
    // console.log(hello)
  });
 coding.forEach((item) => {
  // console.log(item);
});
  
const num = [1, 21, 31 ,14, 15, 16 ,17, 18]
// num.forEach((square=>{
//     console.log(square ** 2)
// }))

//? declaring a callback function
let calSquare = (square)=>{
    console.log(square ** 2)
}
// num.forEach(calSquare)

function printMe(item1) {
  console.log(item1)
}
coding.forEach(printMe);

coding.forEach((item, index, array) => {
  // console.log(`item: ${item}, index: ${index}, array: ${array}`)
});

const myCoding = [
  {
    lanName: "JavaScript",
    lanFileName: "JS",
  },
  {
    lanName: "Java",
    lanFileName: "java",
  },
  {
    lanName: "python",
    lanFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.lanName);
});
