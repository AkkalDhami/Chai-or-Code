//! Abstraction:
//* Abstraction is the concept of hiding the complex implementation details and showing only the essential features of an object.

//* It allows developers to work at a higher level without worrying about the inner workings of a system.

//* It helps reduce complexity and allows the programmer to focus on high-level operations.

//* method of overriding: Method overriding occurs when a subclass has a method with the same name as a method in its parent class. The subclass method overrides the parent class method, allowing you to change its behavior.
// class Animal {
//     speak() {
//         console.log("Animal makes a sound");
//     }
// }
// class Dog extends Animal {
//     speak() {
//         console.log("Dog barks");
//     }
// }
// const dog = new Dog();
// dog.speak(); // Dog barks

//! Example 1: Abstract Class Simulation
class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("Cannot instantiate an abstract class.");
        }
        this.name = name;
    }
    // Abstract method
    makeSound() {
        throw new Error("Abstract method 'makeSound' must be implemented by subclass.");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} says Woof!`);
    }
}

class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} says Meow!`);
    }
}

const dog = new Dog("Buddy");
dog.makeSound(); // Buddy says Woof!

const cat = new Cat("Whiskers");
cat.makeSound(); // Whiskers says Meow!

// const animal = new Animal("Generic"); // Error: Cannot instantiate an abstract class.


class Shape {
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate Shape directly.");
        }
    }

    calculateArea() {
        throw new Error("calculateArea() must be implemented in subclasses.");
    }
}

//* super() is a special keyword in JavaScript used within class constructors to call the constructor of the parent class. It is required when using the extends keyword to create a subclass.

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(5);
console.log(circle.calculateArea()); // 78.53981633974483

// const shape = new Shape(); // Error: Cannot instantiate Shape directly.

//! Example 2: Abstraction in Action
class Payment {
    constructor(amount) {
        if (new.target === Payment) {
            throw new Error("Cannot instantiate an abstract class.");
        }
        this.amount = amount;
    }

    processPayment() {
        throw new Error("Abstract method 'processPayment' must be implemented.");
    }
}

class CreditCardPayment extends Payment {
    processPayment() {
        console.log(`Processing credit card payment of $${this.amount}`);
    }
}

class PaypalPayment extends Payment {
    processPayment() {
        console.log(`Processing PayPal payment of $${this.amount}`);
    }
}

const cardPayment = new CreditCardPayment(100);
cardPayment.processPayment(); // Processing credit card payment of $100

const paypalPayment = new PaypalPayment(150);
paypalPayment.processPayment(); // Processing PayPal payment of $150


class Parent {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}!`);
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    introduce() {
        console.log(`My name is ${this.name}, and I am ${this.age} years old.`);
    }
}

const child = new Child("Alice", 12);
child.greet();
child.introduce();
