const express = require('express')

const app = express()
const port = process.env.port || 8000;

app.get('',(req,res)=>{
    res.send("we are in home page")
})
app.get('/about',(req,res)=>{
    res.send("we are in about page")
})
app.get('/contact',(req,res)=>{
    res.send("We are in about contact page")
})
app.get('*',(req,res)=>{
    res.send("We are 404 error page")
})

app.listen(port, ()=>{
    console.log(`Your request is send to port-number ${port}`)
})
