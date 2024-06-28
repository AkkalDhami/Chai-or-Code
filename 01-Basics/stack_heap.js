// Stack(Primitive), Heap(Non-Primitive)
// -Copy               - Reference

let myYoutubename = "Akkal Dhami";

let anotherName = myYoutubename;
anotherName = "Chai or Code";

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email = "akkal@google.com"
console.log(userOne.email);
console.log(userTwo.email);