// require("./second")

const {sum, diff}= require("./second");  //now sum() function executes
 

// Private:---------
// console.log("This is second.js file")

// function sum(a,b){
//     console.log(a+b);
// }



// This is how require(): is implemented (whole code is wrapped inside a function)
// (function (){
//     console.log("This is second.js file")

//     function Sum(a,b){
//     console.log(a+b);   
//     }
// })();   
//bracket at the end immediately calls the function()(IIFE) 
// console.log() prints but not sum() function



sum(4,5); 
diff(9,3);
console.log("This is first.js file")
// console.log(module.exports);    //it is empty object


// CJS: Common JS Module
// I need second.js code in my first.js file to run
