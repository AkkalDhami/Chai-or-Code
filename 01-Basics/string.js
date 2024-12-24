//! String in JS are Immutable(Not changed)

const name = "Akkal"
const age = 25;
const country = "Nepal";

let result = `Hello my name is ${name} \n My age is ${age} \n I am from ${country}`
// console.log(result);

const gameName = new String('hitesh-hc')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

let str = `Akkal Dhami`;
str = str.toLowerCase()
console.log(str);

let newStr= str.toUpperCase()
console.log(newStr);


console.log(gameName.charAt(4));
console.log(`charcode at : `,gameName.charCodeAt('s'));
console.log(gameName.indexOf(`h`));

const newString = gameName.substring(0, 4) //!Note: End value not included ; h i t e
console.log(newString);                                                                           

const anotherString = gameName.slice(-8, 4)
// const anotherString = gameName.slice(-8)
console.log("slice ",anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim()); //! Remove starting and ending whitespaces but not middle
                                  //! "   Akkal Dhami  " => Akkal Dhami
const url = `https://akkal.com/akkal%20dhami`
console.log(url.replace('%20', '-'));  // Replace %20 to `-
console.log(url.includes('akkal-dhami'));

const myName = `Rajan Malla`;
console.log(myName.replace("R", "S"));//! Replace 'R' with 'S'


const gameName1 = new String('hitesh-hc-')
console.log(gameName1.split('-'));

let str1 = "Akkal"
let str2 = " Dhami"

let newResult =`My name is ` +  str1.concat(str2); //! Joins str1 with str2
// let newResult = `My name is ` + str1 + str2;
console.log(newResult);

let sub = `Science and Maths`;
sub.toUpperCase();
console.log(sub);

console.log(sub.toUpperCase());
console.log(sub.toLowerCase());

//! startsWith && endsWith
const browserType = "mozilla";
if (browserType.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!"); 
}

//! replace 

const browserType2 = "mozilla";
const updated = browserType2.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType2); // "mozilla"

//! replaceAll 
let quote = "To be or not to be";
quote = quote.replaceAll("be", "code");

console.log(quote); // "To code or not to code"
