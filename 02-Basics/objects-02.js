// const tinder = new Object() //* Singelton object
const tinderUser = {}//* Non-Singelton object

tinderUser.id = "123abc"
tinderUser.name = "Akkal"
tinderUser.isLoggenIn = false

// console.log(tinderUser);

const regularUser ={
    email:"akkal@gmail.com",
    fullname:{
        userFullname: {
            firstName:'Akkal',
            lastName:"Dhami"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstName);

let obj1 ={
    1:"a",
    2:"b"
}
let obj2 ={
    3:"c",
    4:"d"
}
let obj4 ={
    5:"c",
    6:"d"
}
// let obj3 = {obj1, obj2} //* => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign(obj1, obj2) //*=> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3 = Object.assign({}, obj1, obj2, obj4) //* {} => target

// const obj3 = {...obj1, ...obj2}

// console.log(obj3)

const users = [
    {
        id:1,
        email:"akkal@gmail.com"
    },
    {
        id:1,
        email:"aavash@gmail.com"
    },
    {
        id:1,
        email:"akkal@gmail.com"
    }
]
users[1].email
console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //* => [ 'id', 'name', 'isLoggenIn' ]
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//* => [ [ 'id', '123abc' ], [ 'name', 'Akkal' ], [ 'isLoggenIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLogged')); //* => false

const course ={
    coursename:"js in hindi",
    price:"999",
    courinstructor:"hitesh"
}
// course.courinstructor

// const {courinstructor: instructor} = course
// console.log(courinstructor);
// console.log(instructor);

// const nav = ({company}) =>{
//  //* destructuring
// }
// nav(company ="Akkal")

//?API

// {
//     "name":"Akkal",
//     "coursename":"js in hindi",
//     "price":"free"
// }
//* JSON => java script object notation
[
    {},
    {},
    {}
]

const student = {
    name: 'Sheldon',
    score: 100,
    grade: 'A',
  }
  
//   console.log(student)
  // { name: 'Sheldon', score: 100, grade: 'A' }
  
  delete student.score
  student.grade = 'F'
//   console.log(student)
  // { name: 'Sheldon', grade: 'F' }
  
// console.log(student);
  // TypeError: Assignment to constant variable.

  const person = {
    firstName: "Matilda",
    age: 27,
    hobby: "knitting",
    goal: "learning JavaScript"
  };
  
  delete person.hobby; // or delete person[hobby];
  
//   console.log(person);
  /*
  {
    firstName: "Matilda"
    age: 27
    goal: "learning JavaScript"
  }
  */
      
  
  const activity = 'Surfing';
const beach = { activity };
// console.log(beach); // { activity: 'Surfing' }


