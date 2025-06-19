const express = require('express')
const app = express();

const hostname = 'localhost'
const port = 8017


app.get('/',function(req,res){
    res.send('<h1>Hello World xin chao ca ban<h1>')
})

app.listen(port,hostname),() =>{
    console.log(`hello lequang dat dat,running server${hostname}:${port}/`)
}