const myObject = {
    js:"javascript",
    py:"python",
    java:"java",
    ruby:"ruby"

}

for (const key in myObject) {
    // console.log(key);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "py", 'java']
for (const key in programming) {
    // console.log(programming[key]);
}

const map1 = new Map([
    ["name", "Akash"],
    ["age", 25],
    ["city", "Noida"]
]);

for (let [key, value] of map1) {
    console.log(`${key}: ${value}`);
}


const map = new Map()
map.set('name', 'John')
map.set('roll No', '20')

for (const key in map) {
    console.log(key);
}