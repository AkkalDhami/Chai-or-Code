const coding = ["js", "py", "cpp", "ruby"];


//  coding.forEach((item,idx,  arr) => {
//   console.log(item,idx,  arr);
// });


for (const iterator of coding) {
  // console.log(iterator);
}

for (const key in coding) {
    // console.log(coding[key]);
  }

// const value = coding.forEach((item) => {
//   return item;
// });
// console.log(value);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
    return num % 2 !== 0; //* return must imp if there is block scope{}
});


// const newNums = myNums.filter((num) =>num % 2 !== 0);

// const newNums = [];
// myNums.forEach((num) => {
//   if (num % 2 === 0) {
//     newNums.push(num);
//   }
// });
console.log(newNums);

const books = [
  { title: "Book-1", genre: "History", publish: 2009, edition: 2014 },
  { title: "Book-2", genre: "Scince", publish: 1919, edition: 2015},
  { title: "Book-3", genre: "Fiction", publish: 2008, edition: 2012 },
  { title: "Book-4", genre: "NonFiction", publish: 2007, edition: 2013 },
  { title: "Book-5", genre: "History", publish: 2006, edition: 2014 },
  { title: "Book-6", genre: "Fiction", publish: 2001, edition: 2024 },
  { title: "Book-7", genre: "History", publish: 2010, edition: 2014 },
];
// const userBooks = books.filter( (bk)=> bk.genre === 'History' )
const userBooks = books.filter((bk)=> bk.publish>=1995 && bk.genre === 'History')
// console.log(userBooks);