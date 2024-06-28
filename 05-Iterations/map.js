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


const map = new Map()
map.set('name', 'John')
map.set('roll No', '20')

for (const key in map) {
    console.log(key);
}