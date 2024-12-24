//? Immediately Invoked Function Expression (IIFE)

(function chai() { //* named iife
    console.log(`DB CONNECTED`);
})();//* ;=> must required

((name)=>{
    console.log(`DB DISCONNECTED ${name}`)
})('Akkal');

((name)=>{
    console.log(`DB DISCONNECTED ${name}`)
})('Aavash')

//!Notes:
//! 1. IIFE is a function that is called immediately after it is defined.
//! 4. ';' must used ---->> many iife


