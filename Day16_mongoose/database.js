const mongoose = require('mongoose');

// const url = "mongodb+srv://pushprajbharti125_db_user:MongoDB125@clusterlife125.b1ebedo.mongodb.net/"

async function main() {
   
  await mongoose.connect("mongodb+srv://pushprajbharti125_db_user:MongoDB125@clusterlife125.b1ebedo.mongodb.net/Bookstore");  //database: Bookstore

//   // code likhna shuru kar do

  // const userSchema = new Schema({
  //   name: String,
  //   age: Number,
  //   city: String,
  //   gender: String,
  //   text: String
  // }) 
  



  // // // Model ko create === Collection create karna(Table ko create karna)
  // // // Class create kari hai(ye bhi bol sakte hai)
  // const User = mongoose.model("user",userSchema);  //collection : user

   
  // Document ko create kiya hai or Object ko create kiya hai
  // const user1 = new User({name:"Pushp Raj Bharti", age:20, city:"dhanbad", gender:"Male", text:"This __v is version that tells how many times it has been modified"});
  // await user1.save();

  // or we can do like this way
  // await User.create({name:"Ujjwal", city:"Islamabad", age:25});   //create and save


  // await User.insertMany([{name:"Ipsita Das", age:19},{name:"Lakshmi", age:25, gender:"Male"}]);


  // const ans = await User.find({});
  // console.log(ans);

  
  // //-----------find document by particular field
  // const result = await User.find({name:"Pushp Raj Bharti"});
  // console.log(result);

} 

module.exports = main;