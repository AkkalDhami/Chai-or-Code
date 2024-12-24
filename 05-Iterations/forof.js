

const arr = [1, 2 ,3 ,4]
for (const num of arr) {
    console.log(num);
}
for (const key in arr) {
    console.log(arr[key])
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

//?Maps
const map = new Map()
map.set('name', 'John')
map.set('roll No', '20')

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':', value);
}


const myObject ={
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject(myObject)) {
    // console.log(key, ':', value);
// }
