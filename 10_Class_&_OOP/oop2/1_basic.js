
//! What is OOP?
//* Object-Oriented Programming (OOP) is a programming paradigm where the code is organized into objects that represent real-world entities.

//* OOP is based on the concept of objects and classes, which are used to define and manipulate data structures (objects), and their behavior (methods).


//! Four Pillars of OOP
//* Encapsulation: Wrapping data and methods together in a single unit.

//* Abstraction: Hiding implementation details from the user.

//* Inheritance: Reusing properties and methods from an existing class.

//* Polymorphism: The ability of an object to take on multiple forms.


//! Why use OOP?

//* Reusability: Objects can be reused in different parts of the program.

//* Modularity: Objects can be developed and tested independently.

//* Encapsulation: Ensures data integrity and prevents unauthorized modifications.


//! Differences between OOP and procedural programming
//? Procedural Programming
//* Procedural programming is a paradigm where code is organized as a sequence of instructions executed step-by-step.

//* The focus is on functions and procedures to operate on data.
// Procedural Code
let car1st = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    printCarDetails() {
        return (`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
};
let car2nd = {
    brand: "Honda",
    model: "Civic",
    year: 2023,
    printCarDetails() {
        return (`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
};
console.log(car1st.printCarDetails());
console.log(car2nd.printCarDetails());

//? Object-Oriented Programming (OOP)
//* Object-Oriented Programming (OOP) is a programming paradigm where the code is organized into objects that represent real-world entities.

//* The focus is on designing entities that represent real-world objects

function Car1(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.printDetails = function () {
        return (`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
}

const carA = new Car1("Toyota", "Corolla", 2022);
const carB = new Car1("Honda", "Civic", 2023);
console.log(carA.printDetails())
console.log(carB.printDetails())

function sum(a, b) {
    this.a = a;
    this.b = b;
    this.sum = function () {
        return this.a + this.b;
    }
}
const sumObj = new sum(3, 4);
console.log(sumObj.sum())

function add(...num) {
    this.sum = num
    this.sumValue = function () {
        return this.sum.reduce((acc, curr) => acc + curr, 0);
    }

}

const sumObj2 = new add(3, 4, 5, 6, 7)
console.log(sumObj2.sumValue())

//! Example of OOP in JavaScript

// Procedural Example
const car1 = {
    brand: "Toyota",
    model: "Corolla", year: 2022
};
const car2 = {
    brand: "Honda",
    model: "Civic", year: 2023
};
// console.log(car1, car2);

// OOP Example
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
const car3 = new Car("Toyota", "Corolla", 2022);
const car4 = new Car("Honda", "Civic", 2023);
console.log(car3, car4);