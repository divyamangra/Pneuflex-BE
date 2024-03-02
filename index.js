const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
mongoose.connect(process.env.MONGO_URI).then((res)=>{console.log("connected")}).catch((err)=>{console.log(err)})
const app = express()
app.listen(3000, ()=>{
    console.log('serving at port 3000')
})

app.get('/', (req, res)=>{
    res.send("hello")
})