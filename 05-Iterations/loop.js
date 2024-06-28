//? for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
        // console.log("5 is my fav no.");
    }
    // console.log(element);
}

for (let i = 1; i <= 10 ; i++) {
    // console.log(`Multiple of ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myarr = ["flash", "batman", "superman"] 
// console.log(myarr.length);
for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
    // console.log(element);
    
}

//? break and continue

for (let i = 1; i <= 20; i++) {
    if (i ==5) {
        // console.log(`deteched 5`);
        break
    }
    // console.log(`Value of i is ${i}`)
    
}


for (let i = 1; i <= 20; i++) {
    if (i ==5) {
        console.log(`deteched 5`);
        continue
    }
    console.log(`Value of i is ${i}`)
    
}