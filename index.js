import express from 'express'
import cors from "cors"
import 'dotenv/config'
import user from './dbmodel/user.js'
import connectDB from './dbconfig/dbconnection.js'
connectDB()

//const express = require('express')
const app = express()
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World')

})
app.get('/form',(req,res) =>{
      //console.log(req,"request")
      const person={
        name:"liya",
        age:22,
        place:"tvm",
        email:"liyamarymathew72@gmail.com"
      }
    res.json({data:person})
    
})
app.post('/form-submit', (req, res) => {
    const { name, email } = req.body;
   user.insertOne({ name, email });
   res.json({ status: true });
  
  })
console.log("Hi")
app.listen(3001,() =>{
    console.log("server running at port 3001")

}) 
  