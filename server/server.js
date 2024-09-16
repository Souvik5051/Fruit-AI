const http=require('http');
const express=require('express');
const cors=require('cors');
const socketIO=require('socket.io');

const users=[{}]

const app=express();
app.use(cors());
app.use(express.json());

require('dotenv').config();
const PORT=process.env.PORT || 4000;


const server=http.createServer(app)

const io=socketIO(server);

io.on("connection",(socket)=>{
    console.log("New connection");

    socket.on('joined',({user})=>{
        users[socket.id]=user;
        console.log(`${user} has joined `)
        socket.broadcast.emit('userJoined',{user:"Admin",message:`${users[socket.id]} has joined`})
        socket.emit('welcome',{user:"Admin",message:`Welcome to the chat, ${users[socket.id]}`})
    })
    socket.on('message',({message,id})=>{
        io.emit('sendMessage',{user:users[id],message,id})
    })
    socket.on('disconnect',()=>{
        socket.broadcast.emit('leave',{user:"Admin",message:` ${users[socket.id]} has left`})
        console.log(`User left`)
    })
    
})

//DB connection
const dbConnection=require('./config/database');
dbConnection();

const faqRoute=require('./routes/faqRoutes');
app.use('/faqs',faqRoute);

server.listen(PORT,()=>{
    console.log(`Server is working on ${PORT}`);
})

app.get("/", (req, res) => {
    res.send(`<h1>Backend is Running and this is '/' Route</h1>`);
});

