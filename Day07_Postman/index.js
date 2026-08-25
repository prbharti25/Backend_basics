const express = require("express");
const app = express();


const BookStore = [
    {id:1,name:"Harry Potter", author:"DevFlux"},
    {id:2, name:"Friends", author: "Vikas"},
    {id:3 , name:"Nexus", author:"Pushp"},
    {id:4 , name:"DSA", author:"Maharaj"},
    {id:5, name:"Prem Kahani", author:"Rohan"}
]

app.use(express.json());

// starting string bhi match ho gyi toh wo accept kar leta hai baki match nhi krta
app.use("/book", (req,res)=>{
    res.send(BookStore);
})


// jabtak puri string match na ho tabtak wo accept nhi krta
app.get("/book/:id", (req,res)=>{

    const id = parseInt(req.params.id);
    // console.log(typeof req.params.id)
    const Book =  BookStore.find(info => info.id === id);
    res.send(Book); 
})

app.post("/book", (req,res)=>{
    console.log(req.body);
    BookStore.push(req.body);
    res.send("Data Saved Successfully");
})



app.listen(3000, ()=>{
    console.log("Listening at port 3000");
})








// app.use("/user", (req,res)=>{
//     res.send({name: "Pushp Raj Bharti"});   //returning json object
// })

// ----------------------------------------------
// // parsing karni hoti hai
// app.use(express.json()); 
// //  middleware: json format data => JS Object 

// app.get("/user", (req,res)=>{
//     // console.log(req);

//     res.send({name:"Pushp"})
// })

// app.post("/user", (req,res)=>{

//     // console.log("Data saved successfully");

//     console.log(typeof req.body.age);
//     console.log(req.body);  //req. -> iske ander frontend se bheja hua data hai
//     res.send("Data Saved Successfully");    //res. -> jo data backend se frontend ko bhej rhe hai
// })



// // get, post, patch, put , delete


// app.listen(4000, ()=>{
//     console.log("Listening at port 4000");
// })



// // route match honge: app.use

// // app.get app.post app.patch app.put app.delete