
const person1 = { name: 'John', age: 30 };
const { name, age } = person1;
// console.log(name, age);

const arr = [1, 2, 3];
const [a, b, c] = arr;
// console.log(a, b, c);

//? Spread operator :- used to expand elements of an iterable (like an array or string) into individual elements. It’s commonly used in function calls, array literals, and object literals.
//! function calls
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6

//! Array Literals:
const arr7 = [1, 2, 3];
const arr8 = [...arr7, 4, 5, 6];
console.log(arr8); // Output: [1, 2, 3, 4, 5, 6]

//! Object Literals
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }


//? Rest operartor :-  used to collect multiple elements and condense them into a single array. It’s typically used in function parameters to handle an indefinite number of arguments.

//! Function Parameters:
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

//! Array Destructuring
const [first,sec,  ...rest] = [1, 2, 3, 4];
console.log(first); // Output: 1
console.log(sec); // Output: 2
console.log(rest);  // Output: [ 3, 4]

