//dependencies-core modules
var express=require('express');
var app= express();

var http=require('http');
var mysql=require('mysql');


var server= app.listen(process.env.PORT || 5000,function(){
    console.log("Server started on heuroku")
});

//setup sql connection
//mysql://b0f34851335f6f:6917348c@us-cdbr-iron-east-01.cleardb.net/heroku_2d03868d61ad242?reconnect=true
const con = mysql.createConnection({
    host:"3306",
    user:"b0f34851335f6f",
    password: "6917348c",
    database: "heroku_2d03868d61ad242"
});


app.get('/',function(req,res){
    res.send("hello this is the final project")
});

