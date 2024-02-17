const express=require('express')
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const app=express();
const server=createServer(app);
const io=new Server(server)



app.get('/',(req,res)=>{
    res.sendFile(join(__dirname,'./public/index.html'))
  
})
io.on('connection',(socket)=>{
    console.log(`user is connect ${socket.id}`);
    socket.on('disconnect',()=>{
        console.log('user disconnected');
    })
})

server.listen(8000,(req,res)=>{
    console.log('server running at http://localhost:8000');
})