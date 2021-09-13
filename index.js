const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'cruddatabase',
})
//-----------------------------------------------
// url '/'
app.get("/",(req,res)=>{});
//-----------------------------------------------
app.listen(3001,()=>{
    console.log("runing on port 3001")
})
module.exports = db;