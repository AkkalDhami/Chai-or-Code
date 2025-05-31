function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.balance = balance;
    this.accountNo = Date.now();
}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
}

BankAccount.prototype.withdraw = function (amount) {
    this.balance -= amount;
}


function CurrentAccount(customerName, balance = 0) {
    BankAccount.call(this, customerName); // constructor linking
    this.transactionLimit = 50000;
}

CurrentAccount.prototype = Object.create(BankAccount.prototype)

CurrentAccount.prototype.takeBusinessLoan = function (amount) {
    console.log('Taking business loan: ', amount);
}

function SavingAccount(customerName, balance = 0) {
    BankAccount.call(this, customerName); // constructor linking
    this.transactionLimit = 10000;
}

SavingAccount.prototype = Object.create(BankAccount.prototype)

SavingAccount.prototype.takePersonalLoan = function (amount) {
    console.log('Taking personal loan: ', amount);
}


const a1 = new SavingAccount('Akkal Dhami', 500);
a1.deposit(1000)
a1.withdraw(500)
a1.takePersonalLoan(1000)
console.log(a1);




class BankAccount2 {
    customerName;
    accountNo;
    balance = 0;
    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.balance = balance;
        this.accountNo = Date.now();
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}

class CurrentAccount1 extends BankAccount2 {
    transactionLimit = 50000;
    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }
    takeBusinessLoan(amount) {
        console.log('Taking business loan: ', amount);
    }
}
class SavingAccount1 extends BankAccount2 {
    transactionLimit = 10000;
    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    takePersonalLoan(amount) {
        console.log('Taking personal loan: ', amount);
    }
}
const a2 = new CurrentAccount1("Akkal Dhami", 500);
a2.deposit(1000)
a2.withdraw(500)
a2.takeBusinessLoan(1000)
console.log(a2)