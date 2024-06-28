//* Number
const score = 400;
// console.log(score);

const balance = new Number(100.3);

// console.log(balance); //* => [Number: 100.3]
// console.log(balance.toString()); //* => 100.3
// console.log(balance.toString().length); //* => 5(length of 100.3)
// console.log(balance.toFixed(3)); //* => 100.300(print three num after decimal)

const otherNum = 120.54321;
// console.log(otherNum.toPrecision(5)); //* => 120.54 (6 => 120.543)

const number = 1000000;
// console.log(number.toLocaleString('en-IN')); //* => 10,00,000

//* Maths
// console.log(Math);
// console.log(Math.abs(-3)); //* Convert -ve into +ve(gives positive number only)
// console.log(Math.round(3.54)); //* Round off the number(3.45 => 3 & 3.56 => 4)
// console.log(Math.ceil(3.123)); //* Round off the number(3.45 => 4 & 3.56 => 4)
// console.log(Math.floor(4.9)); //* Round off the number(3.45 => 3 & 3.56 => 3)
// console.log(Math.sqrt(4)); //* print square root(sqrt of 4(9) is 2(3))
// console.log(Math.min(4, 5, 1,  -1, 0)); //* print minimun number(=> -1)
// console.log(Math.max(4, 5, 6, 7, 8,)); //* print maximum number(=> 8)

// console.log(Math.random()); //* Generate a number betwn 0 and 1(with decimal)
// console.log(Math.random()* 12 + 1); //* Generate a number betwn 1 and 12(with decimal)
// console.log(Math.floor(Math.random()*12) +1);//*Generate a number betwn 1 and 12(no decimal)

//? Random Number Generator
// let randomNum = Math.floor(Math.random()*12 +1);
// console.log(randomNum)

//? To generate a random number with min and max.
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min)); //* Generate num betwn min(10) & max(20)

//? Print a specific value of given
// console.log(Math.PI);
// console.log(Math.E);
// let x = 3.83;
// let y = 2;
// let z = 1;
// z = Math.round(x)
// z = Math.trunc(x);
// z = Math.pow(x, y)
// z = Math.log(x)
// z = Math.sin(x)
// z = Math.cos(x)
// z = Math.tan(x)
// z = Math.sign(x)
// console.log(z);

