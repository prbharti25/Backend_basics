const express = require("express");
const app = express();
const main = require("./database");
const User = require("./Models/users")

app.use(express.json());

// CRUD: Create Read Update Delete
 
app.get("/info",async (req,res)=>{

    const ans = await User.find({});
    res.send(ans);
}) 

app.post("/info", async (req,res)=>{

    // const responce = new User(req.body)
    // await responce.save();

    try{
        await User.create(req.body);
        res.send("Successfully updated");
    }
    catch(err){
        res.status(500).send(err);
    }
    
})

app.delete("/info/params", async (req,res)=>{

    try{
        await User.deleteOne({name:"Lakshmi"});
       res.status(200).send("Successfully Deleted");
    }
    catch(err){
        console.error(err);  // log full error
        res.status(500).send("Internal Server Error");
    }
})

app.put("/info", async (req,res)=>{
   
    const result = await User.updateOne({ name: 'Raj Ranjan' }, {name: "Raj Ranku", email: "raju@example.com" ,city:"Bangladesh"});
    console.log(result);
    res.send("Updated Succesfully");
})


main()
.then(async ()=>{
    console.log("Connected to DB")
    app.listen(3000, ()=>{
        console.log("Listening at port 3000");
    })

    // const result = await User.find({name:"Pushp Raj Bharti"});
    // console.log(result);
})
.catch((err)=>console.log(err)); 


 
