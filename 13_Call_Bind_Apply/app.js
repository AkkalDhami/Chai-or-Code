//? call, bind and apply

//? Function borrowing
const user = {
    fname: "Akkal",
    lname: "Dhami",
    getFullName(greeting, timeOfTheDay) {
        return `${greeting},  ${this.fname} ${this.lname}! ${timeOfTheDay}`
    }
}
const user2 = {
    fname: "Aavash",
    lname: "Dhami",
}

console.log(user.getFullName.bind(user2, 'Hello', 'Morning')());
console.log(user.getFullName.call(user2, 'Hello', 'Morning'));
console.log(user.getFullName.apply(user2, ['Hello', 'Morning']));


//? Function Currying
function multiply(a, b) {
    return a * b;
}
const doubltIt = multiply.bind(null, 2);
console.log(doubltIt(4))

async function fetchData(baseURL, endpoint) {
    const response = await fetch(`${baseURL}${endpoint}`)
    const data = await response.json();
    return data;
}

const getAuthData = fetchData.bind(null, 'https://authservice.com');
const getCatalogData = fetchData.bind(null, 'https://catalogservice.com');
// console.log(getAuthData('/api/user'))
// console.log(getCatalogData('/api/products'))


function logData() {
    console.log(this.name);
}
const user4 = {
    name: 'Akkal'
}

logData.call(user4)
logData.apply(user4)


// Event listeners
class User {
    name;
    constructor(name) {
        this.name = name;
        // this.printName = this.printName.bind(this);
    }
    printName() {
        console.log(this)
        console.log(this.name)
    }
}
const newUser = new User('Akkal');

const btn = document.getElementById("btn")
newUser.printName()
// btn.addEventListener('click', newUser.printName)
btn.addEventListener('click', function () {
    newUser.printName()
})