import sum from "./second.js";

// const sum= require("./second.js");

// to run without .mjs extension we created package.json so that node gets 
// compatible with modern type that is import/export (MJS) using ECMA

sum(34,5);
console.log("Hello World!");

// Node: by default understands CJS.