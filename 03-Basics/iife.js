//? Immediately Invoked Function Expression (IIFE)

(function chai() { //* named iife
    console.log(`DB CONNECTED`);
})();//* ;=> must required

((name)=>{
    console.log(`DB DISCONNECTED ${name}`)
})('Akkal')

