class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    birthday() {
        this.age += 1;
    }
    getDetails() {
        console.log(`${this.name} is ${this.age} years old.`);
    }
}

const person = new Person3("Alice", 30);
person.birthday();
person.getDetails();


class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        console.log(`Account Balance: $${this.balance}`);
    }
}

const account = new BankAccount("John", 1000);
account.deposit(500);
account.withdraw(2000);
account.getBalance();



class Laptop {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    applyDiscount(discount) {
        this.price -= discount;
    }
    showDetails() {
        console.log(`${this.brand} laptop costs $${this.price}`);
    }
}

const laptop = new Laptop("Dell", 1000);
laptop.applyDiscount(200);
laptop.showDetails();


class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }
    read(pagesRead) {
        if (pagesRead <= this.pages) {
            this.pages -= pagesRead;
        } else {
            console.log("You can't read more pages than the book contains!");
        }
    }
    getRemainingPages() {
        console.log(`${this.pages} pages left to read.`);
    }
}

const myBook = new Book("JavaScript Mastery", 300);
myBook.read(100);
myBook.getRemainingPages();
myBook.read(250);


class Shape {
    constructor(type, dimension) {
        this.type = type;
        this.dimension = dimension;
    }
    calculateArea() {
        if (this.type === "Square") {
            return this.dimension * this.dimension;
        } else if (this.type === "Circle") {
            return Math.PI * this.dimension * this.dimension;
        } else {
            return "Unknown shape";
        }
    }
}

const square = new Shape("Square", 4);
const circle = new Shape("Circle", 3);

console.log(square.calculateArea());
console.log(circle.calculateArea());


class Smartphone {
    constructor(brand, model, battery) {
        this.brand = brand;
        this.model = model;
        this.battery = battery;
    }
    useBattery(hours) {
        if (this.battery >= hours) {
            this.battery -= hours;
        } else {
            console.log("Not enough battery to use!");
        }
    }
    chargeBattery(amount) {
        this.battery += amount;
    }
    getBatteryStatus() {
        console.log(`Battery level: ${this.battery}%`);
    }
}

const phone = new Smartphone("Samsung", "Galaxy S21", 50);
phone.useBattery(30);
phone.getBatteryStatus();
phone.useBattery(25);


class Game {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }
    increaseLevel() {
        this.level++;
    }
    resetLevel() {
        this.level = 1;
    }
    getLevel() {
        console.log(`Current level in ${this.name}: ${this.level}`);
    }
}

const game = new Game("Adventure Quest", 5);
game.increaseLevel();
game.getLevel();
game.resetLevel();
game.getLevel();


class Student {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    improveGrade(amount) {
        this.grade += amount;
    }
    getDetails() {
        console.log(`${this.name} has a grade of ${this.grade}`);
    }
}

const student = new Student("John", 75);
student.improveGrade(10);
student.getDetails();


class Car {
    constructor(make, model, fuelLevel) {
        this.make = make;
        this.model = model;
        this.fuelLevel = fuelLevel;
    }
    drive(miles) {
        const fuelConsumed = miles * 0.1;
        if (fuelConsumed <= this.fuelLevel) {
            this.fuelLevel -= fuelConsumed;
        } else {
            console.log("Not enough fuel for this drive!");
        }
    }
    refuel(amount) {
        this.fuelLevel += amount;
    }
    getFuelLevel() {
        console.log(`Fuel level: ${this.fuelLevel} gallons`);
    }
}

const car = new Car("Toyota", "Corolla", 10);
car.drive(50);
car.getFuelLevel();
car.refuel(5);
car.getFuelLevel();

class Movie {
    constructor(title, director, duration) {
        this.title = title;
        this.director = director;
        this.duration = duration;
    }
    watch(minutes) {
        if (minutes <= this.duration) {
            this.duration -= minutes;
        } else {
            console.log("You can't watch more minutes than the movie's duration!");
        }
    }
    getRemainingTime() {
        console.log(`Remaining time to watch: ${this.duration} minutes`);
    }
}

const movie = new Movie("Inception", "Christopher Nolan", 148);
movie.watch(60);
movie.getRemainingTime();
movie.watch(100);
movie.getRemainingTime();



class BankAccount2 {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
    getBalance() {
        console.log(`Account balance: $${this.balance}`);
    }
}

const account2 = new BankAccount2("12345", 500);
account2.deposit(200);
account2.getBalance();
account2.withdraw(600);
account2.getBalance();


class Laptop2 {
    constructor(brand, price, stock) {
        this.brand = brand;
        this.price = price;
        this.stock = stock;
    }
    sell(quantity) {
        if (quantity <= this.stock) {
            this.stock -= quantity;
        } else {
            console.log("Not enough stock available.");
        }
    }
    restock(quantity) {
        this.stock += quantity;
    }
    getStock() {
        console.log(`Current stock of ${this.brand}: ${this.stock}`);
    }
}

const laptop2 = new Laptop2("Dell", 1000, 50);
laptop2.sell(20);
laptop2.getStock();
laptop2.restock(30);
laptop2.getStock();


class Smartphone2 {
    constructor(brand, model, batteryLevel) {
        this.brand = brand;
        this.model = model;
        this.batteryLevel = batteryLevel;
    }
    charge(amount) {
        this.batteryLevel += amount;
        if (this.batteryLevel > 100) {
            this.batteryLevel = 100;
        }
    }
    use(amount) {
        this.batteryLevel -= amount;
        if (this.batteryLevel < 0) {
            this.batteryLevel = 0;
        }
    }
    getBatteryLevel() {
        console.log(`Battery level of ${this.model}: ${this.batteryLevel}%`);
    }
}

const phone2 = new Smartphone2("Samsung", "Galaxy S21", 50);
phone2.use(20);
phone2.getBatteryLevel();
phone2.charge(30);
phone2.getBatteryLevel();
