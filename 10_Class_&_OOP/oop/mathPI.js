// const pi = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(pi)


const chai = {
    name: "Chai",
    price: 1222,
    isAvialable: true,
    orderChai() {
        console.log("not ordering chai");
    }
}
const { name: { chaiName = "Black Tea" } } = chai;
console.log(chaiName)


// console.log(chai)

Object.defineProperty(chai, 'name', {
    writable: false,
    configurable: false,
    enumerable: false,

})
const des = Object.getOwnPropertyDescriptor(chai, "name");
// console.log(des)

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        // console.log(`${key}: ${value}`);
    }
}
chai.name = "Tea"
// console.log(chai.name);