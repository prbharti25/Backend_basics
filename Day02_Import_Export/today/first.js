// const sum = require("./current/sum.js");
// const sub = require("./current/sub.js");
// const mul = require("./current/mul.js");

// no need to write require many times, we created index file which will import all the files needed
const {sum, sub, mul} = require("./calculator");     //why not ("./calculator/index") ??  
// In node.js: by defalut  
// index.js file if exported from a folder


sum(4,6);
sub(35,8);
mul(23,45);

console.log("Hello Guys")