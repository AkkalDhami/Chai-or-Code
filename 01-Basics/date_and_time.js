let myDate = new Date();
console.log(myDate.toString());  //* => Tue Jun 18 2024 17:58:46 GMT+0545 (Nepal Time)
console.log(myDate.toDateString()); //* => Tue Jun 18 2024
// console.log(m/Date.toJSON()); //* Print: 2024-06-18T12:13:46.440Z
console.log(myDate.toLocaleDateString()); //* => 6/18/2024
console.log(myDate.toLocaleString()); //* Print: 6/18/2024, 6:01:26 PM
console.log(myDate.toTimeString()); //* => 17:58:46 GMT+0545 (Nepal Time)

console.log(typeof myDate); // => object

console.log(Date());


// let newDate = new Date(2006, 4,28);
// let newDate = new Date(2006, 4,28,5,4);
// let newDate = new Date("2023-01-13"); 
// let newDate = new Date("02-14-2024");
// console.log(newDate.toLocaleString());

let timeStamp = Date.now();

// console.log(timeStamp);
// console.log(myDate.getTime());
// console.log(Date.now()/100);
// console.log(Math.floor(Date.now()/100));

let date = new Date();
console.log(date); //* => 2024-06-18T13:39:23.837Z
console.log(date.getFullYear()); //* => 2024(Current Year)
console.log(date.getHours()); //* => 19(Current Hours)
console.log(date.getDay()); //* => 2(tuesday);  Sunday- 0, Monday-1..
console.log(date.getMonth()); //* => 5(june)

// date.toLocaleString('default',{
//     weekday: 'long',
//     day: "2-digit"
// })