const express = require('express')
const app = express()

const PORT = 3333;

app.get("/",(req,res)=>{
    res.json({message: "/ home"})
})

app.listen(PORT,()=>{
    console.log(`Page run in port ${PORT}`)
})