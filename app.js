const express = require('express');
const fs = require('fs');
const path = require('path');
// modules

const app = new express();

//read file 
let Jsondata = fs.readFileSync(path.resolve(__dirname, 'example.json'));
let json_array = JSON.parse(Jsondata);
// json strinfy -> json parse


app.get('/users',(req,res)=>{
    res.send(json_array);  //root route
})

app.get('/users/:userId',(req,res)=>
{
    //custom route accept id and based on that respond output
    console.log('yes');
    const Id = req.params.userId;
    const record = json_array.filter((object)=>object.id == Id);
    console.log(record);
    res.send(record)
})

//working at port no 5001
app.listen(5001,()=>{
    console.log('working')
})