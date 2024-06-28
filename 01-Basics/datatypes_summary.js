//!  Notes:
//*  1. Primitive DataTypes
//*   - String, Number, Undefined, Null, Boolean, Symbol, BigInt

//*   2. Non-Primitive(Reference)
//*   - Object, Array, Function

//*   JS is dynamically typed language.

//* Typeof Val   Result
//*   Number   => number
//*   String   => string
//*   Boolean  => boolean
//*   Null     => object
//*   Undefined => undefined
//*   Symbol   => symbol
//*   BigInt   => bigint


const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;

let userName;

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 12345678902345678n;


const heros = ["shaktiman", "doja"];
 let obj = {
    name:"akkal",
    age:23

}

const myFunction = function (){
    // console.log("Hello World");
}

console.log(typeof obj);