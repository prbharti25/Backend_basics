const express = require('express');
const app = express();
const { Server } = require("socket.io");
const http = require('http')
const path = require('path')


const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
});


io.on("connection", (socket)=>{

    // socket.on('message',(data)=>{
    //     socket.broadcast.emit('new-message', data);
    // })


    // io.to sends message to everyone including the sender, but socket.io sends to all exceot the sender
    socket.on('message',({room,msg})=>{
        socket.to(room).emit('new-message', msg);
    })

    socket.on('join-room',(room)=>{
        socket.join(room);
    })


    




    socket.on("disconnect", ()=>{
        console.log("Disconnected from server");
    })

})

server.listen(3000,()=>{
    console.log("Listening");
})











