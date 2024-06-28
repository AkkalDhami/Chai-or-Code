//? Array: collection of items, mutable

let arr = [0, 1, 2, 3, 4, 5];
// console.log(arr)
// console.log(arr[0]);
// console.log(arr[1]);

const heros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2);

//? Array methods
// arr.push(9) //* Add array at last
// arr.pop() //* remove last value
// arr.unshift(9) //* Add array at first 
// arr.shift() //* remove first value

// console.log(arr.includes(14)) //* returns true(if include) or false(not include)
console.log(arr.indexOf(2)) //* Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

// console.log(arr)

const newArr = arr.join("-"); //* => 0-1-2-3-4-5
// console.log(newArr); //* typeof newArr = string

//? slice or splice
// console.log("A", arr); //* => A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = arr.slice(1, 3)
// console.log("B", arr) //* => B [ 0, 1, 2, 3, 4, 5 ]
// console.log(myn1) //* => [ 1, 2 ] (last value didn't include)

const myn2 = arr.splice(1, 3)
// console.log("c", arr) //* => c [ 0, 4, 5 ] 
// console.log(myn2) //* => [ 1, 2, 3 ](last value included)