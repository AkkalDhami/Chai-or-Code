

class BankAccount {
    customerName;
    accountNo;
    #balance = 0; // private properties
    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.#balance = balance;
        this.accountNo = Date.now();
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    // setBalance(amount) {
    //     if (typeof amount !== 'number') {
    //         throw new Error("Invalid Amount")
    //     }
    //     this.#balance = amount
    // }

    set balance(amount) { // setters
        if (typeof amount !== 'number') {
            throw new Error("Invalid Amount")
        }
        this.#balance = amount
    }

    get Balance() { // getters
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    #calculateInterest(amount) { // private method
        console.log('calculatig interest...')
    }

    takeBusinessLoan(amount) {
        this.#calculateInterest(amount);
        console.log('Taking business loan: ', amount);
    }
}

const a1 = new CurrentAccount("Akkal Dhami", 2000);
a1.balance = 5000;
a1.balance = 1200;
a1.takeBusinessLoan(1200)
console.log(a1)