const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')
const mysql = require('mysql');
//-----------------------------------------------
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'password',
    database:'cruddatabase',
    debug: false
})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded());

app.post("/api/insert",(req,res) => {
    //getting name,email of the new user !!
    const name = req.body.name
    const email = req.body.email
    const sqlInsert = "INSERT INTO users (name, email) VALUES (?, ?);";
    db.query(sqlInsert, [name, email], (err,result) => {
        console.log(result);
    });
})
//-----------------------------------------------
// url '/'
//app.get("/",(req,res)=>{})
//-----------------------------------------------
app.listen(3001,()=>{
    console.log("runing on port 3001")
})
module.exports = db;