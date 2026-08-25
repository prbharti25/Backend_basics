const bcrypt = require("bcrypt")


const password = "Pushp@123";

async function Hashing(){
// hashcode + salt

// const salt = await bcrypt.genSalt(10);
// console.time("hash");
const hashpass = await bcrypt.hash(password,10);    //generates new salt for each password(each user)
// console.timeEnd("hash")

// console.log(hashpass); 
// $2b$10$7UKI7mLSHinVts/WQdbBjOHIluf1jz21aO3Hu/SVZWLjVXQYaK106
// $2b$10$wpFzAfuaD73eWbC6XSYWiO7n0.Rrl1fE7J023e2rGh7XD25//Xkee

const ans = await bcrypt.compare(password,hashpass);

console.log(ans);

console.log(salt);
console.log(hashpass);
 
}  

// $2b$10$z448J2IMcT6mOI9rjoMDw.
// $2b$10$z448J2IMcT6mOI9rjoMDw.3.gBbXrb9SxoqNKOJGGcgxSXUxEUVKW

Hashing();

// Algorithm --> hashCode

// $2b$10$FGFrKRj/qnlZtzdbX8yiW.a1ss63.MbDLXk22ByuWfnrqEYwPimOG
// $2b$10$gj64VbN4D5qqqGwRzihk8Oa3g9wh0kBORHQi/69PBQHts53R.n5FO