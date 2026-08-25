const express = require("express");

// server is created (instance of server created)
const app = express();

// "/detail"
// "/contact/person" : enters into the contact page and expects the '/person' might be handled inside '/contact'
// "/detail/person"
// "/about"
// "/detail/home/10"

// ? char become Optional
// + char can be repeated multiple times
// * any number of character can arrive (vague)
//  pushp_25


// app.use((req,res)=>{
//     res.send("Hello Pushp this is localhost:4000");
// })


// app.use((req,res)=>{
//         // console.log(req.params);
//         res.send({"name":"Pushp", "age":20, "money":700000, "Mon":21});
// })

// Express works top → bottom ,
// First matching route wins. (it matches this '/' and enters)
// app.get(/abou*t/, (req,res)=>{
//     res.send({"name":"Pushp", "age":20, "money":700000, "Mon":21});
// })


//  :/id -> is dynamic parameter 
app.use("/contact/:id", (req,res)=>{
    console.log(res.params);
    res.send("I am your Contact Page");
})

app.use("/contact", (req,res)=>{
    res.send("I am your Contact Page");
})

app.use("/detail", (req,res)=>{
    res.send("I am your Detail Page");
})

// put this '/' in the last
app.use("/", (req,res)=>{
    res.send("I am Your Home Page");
})



// app is listening to port: 4000
app.listen(4000, ()=>{
    console.log("Listening at port 4000");
})