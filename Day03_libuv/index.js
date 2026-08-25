// fs : file system
const fs = require('fs')

let a = 10;
let b = "Hello guys"

console.log(b);

function sum(a,b){
    return a+b;
}

// This is now synchromous operation (so JS waits here and libuv performs its actions)
const data = fs.readFileSync("./data.json", "utf-8");
console.log(data);


// // This is handled by libuv (since it is asynchronous task)
// fs.readFile("./data.json", "utf-8" ,(err,res)=>{
//     console.log(res);
// })

// JS cannot handle setTimeout so it gives it to libuv
setTimeout(()=>{
   console.log("Hello Time Out");
},3000)

console.log(a);
console.log(sum(3,8));