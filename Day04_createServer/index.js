const http = require('http');

// createServer returns an object
const server = http.createServer((req,res)=>{
    
    // res.end("Hello Coder Army");


    // ------Handling Routing------
    
    // home page
    if(req.url==="/")
    res.end("Hello Coder Army");
    
    // contact page
    else if(req.url==="/contact")
    res.end("This is our Contact Page")
    
    // about page
    else if(req.url==="/about")
    res.end("This is our About Page")
    
    else
    res.end("Error: Page Not Found");
    
    
});

// port number : 4000
server.listen(4000, ()=>{
    console.log("I am Listening at port number 4000");
})