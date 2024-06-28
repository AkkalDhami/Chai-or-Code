//? Singleton 

//? Object literals

const mySym = Symbol("Key1")

const jsuser = {
    name:"Akkal",
    "full name":"Akkal Dhami",
    age: 13,
    [mySym]:"Key1", //* => [Symbol(Key1)]: 'Key1'; correct syntax to declare symbol
    location:"Kathmandu",
    isLoggedIn:false,
    isLoginDays:["Monday", "Saturday"]
}
console.log(jsuser.name);
console.log(jsuser["name"]);
console.log(jsuser["full name"]);//* => Akkal Dhami
console.log(jsuser[mySym]); 

// jsuser.name = "Aavash"
// // Object.freeze(jsuser)
// jsuser.name = "Aman" //* doesn't change;(freeze)
// console.log(jsuser)

// jsuser.greeting = function(){
//     console.log("hello JS user");
// }
// jsuser.greetingto = function(){
//     console.log(`hello JS user ${this.name}`);
// }
// console.log(jsuser.greeting); //* =>undefined [Function (anonymous)]
// console.log(jsuser.greeting());
// console.log(jsuser.greetingto());