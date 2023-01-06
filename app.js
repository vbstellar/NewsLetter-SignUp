const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})

app.listen(3000, ()=>{
    console.log("Server is up and running on port 3000.");
})