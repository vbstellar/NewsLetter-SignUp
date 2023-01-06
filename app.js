const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res){
    var Fname = req.body.fname;
    var Lname = req.body.lname;
    var Email = req.body.email;

    console.log(Fname, Lname, Email);
})

app.listen(3000, ()=>{
    console.log("Server is up and running on port 3000.");
})