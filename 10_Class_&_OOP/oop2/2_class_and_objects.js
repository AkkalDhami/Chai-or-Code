
//! Class: A blueprint for creating objects that encapsulate data (properties) and behavior (methods).

//! Object: An instance of a class containing specific values for properties and the ability to invoke methods defined in the class.

//! Constructor: A special method in a class that is called when a new object is instantiated. It is used to initialize the object’s properties.

//? Basic Class and Object:
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create objects
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Call methods
person1.greet(); // Hi, my name is Alice and I am 25 years old.
person2.greet(); // Hi, my name is Bob and I am 30 years old.


//! Classes are in fact "special functions", and just as you can define function expressions and function declarations, a class can be defined in two ways:
//!a class expression or a class declaration.

// Declaration
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle2 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calculateArea() {
        console.log(`${this.height * this.width}`);
    }
};

// Expression; the class has its own name
const Rectangle3 = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calculateArea() {
        console.log(`${this.height * this.width}`);
    }
};


const rectangle2 = new Rectangle3(6, 12);
rectangle2.calculateArea() // 72



//! Constructor
//* The constructor method is a special method for creating and initializing an object created with a class.

//* There can only be one special method with the name "constructor" in a class

//* a SyntaxError is thrown if the class contains more than one occurrence of a constructor method.
class Person2 {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const otto = new Person2("Otto");
otto.introduce(); // Hello, my name is Otto


//? Adding method:
class Calculator {
    constructor() {
        this.result = 0;
    }
    add(number) {
        this.result += number;
    }
    subtract(number) {
        this.result -= number;
    }
    getResult() {
        console.log(`The result is ${this.result}`);
    }
}

// Create object
const calc = new Calculator();
calc.add(10); // Adds 10
calc.subtract(4); // Subtracts 4
calc.getResult(); // The result is 6


//? practise:

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    describe() {
        return (`Book Title : ${this.title}\nAuthor : ${this.author}\nPages : ${this.pages}`);
    }
}
const book1 = new Book("Hello Js", "Aavash Dhami", 102);
console.log(book1.describe());

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    start() {
        return (`The ${this.brand} ${this.model} is starting.`);
    }
}
const car1 = new Car("Toyota", "Corolla", 2022);

console.log(car1.start());


class Book2 {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You borrowed "${this.title}" by ${this.author}.`);
        } else {
            console.log(`"${this.title}" is currently not available.`);
        }
    }
    returnBook() {
        this.isAvailable = true;
        console.log(`You returned "${this.title}".`);
    }
    checkAvailability() {
        console.log(this.isAvailable ? `"${this.title}" is available.` : `"${this.title}" is not available.`);
    }
}

// Example usage
const book = new Book2("1984", "George Orwell");
book.checkAvailability(); // "1984" is available.
book.borrow(); // You borrowed "1984" by George Orwell.
book.checkAvailability(); // "1984" is not available.
book.returnBook(); // You returned "1984".
book.checkAvailability(); // "1984" is available.


class MobilePhone {
    constructor(brand, model, battery) {
        this.brand = brand;
        this.model = model;
        this.battery = battery;
    }
    charge(amount) {
        this.battery += amount;
        console.log(`Charging the ${this.brand} ${this.model} by ${amount} percent.`);
    }
    useApp(hours) {
        if (this.battery >= hours * 2) {
            this.battery -= hours * 2;
            console.log(`Using app for ${hours} hours.`);
        }
        else {
            console.log(`Not enough battery to use app for ${hours} hours.`)
        }
    }
    getStatus() {
        console.log(`Battery Level : ${this.battery}`)
    }
}
// Example usage
const phone = new MobilePhone("Samsung", "S10", 100);
phone.getStatus(); // Battery Level : 100
phone.charge(50); // Charging the Samsung by 50 percent
phone.getStatus(); // Battery Level : 150
phone.useApp(2); // Using app for 2 hours.


