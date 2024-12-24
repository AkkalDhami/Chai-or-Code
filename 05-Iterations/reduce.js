const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNUm = myNumbers.map((num) => { return num + 10});

const newNUm = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 2) //*[ 12, 22, 32, 42,  52, 62, 72, 82, 92, 102 ]
  .filter((num) => num >= 40); //* [42,  52, 62, 72, 82, 92, 102 ]
console.log(newNUm);

const nums = [1, 2, 3];
const myTotal = nums.reduce((acc, currentval) => {
  console.log(`acc: ${acc} and curval: ${currentval}`);
  return acc + currentval;
  // return acc * currentval
}, 0);
console.log(myTotal);

const shoppingCard = [
  { name: "apple", price: 10 },
  { name: "banana", price: 20 },
  { name: "orange", price: 30 },
  { name: "mango", price: 40 },
  { name: "pineapple", price: 50 },
];

const total = shoppingCard.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(total);
