const mongoose = require('mongoose');

async function main() {
   
  await mongoose.connect("mongodb+srv://pushprajbharti25_mDB:mongoDB25@codelife25.u4sszcz.mongodb.net/Instagram");
  
}

module.exports = main;  