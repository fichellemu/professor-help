//dependencies-core modules
var express=require('express');
var app= express();

var http=require('http');
var mysql=require('mysel');


var server= app.listen(process.env.PORT || 5000,function(){
    console.log("Server started on heuroku")
});

app.get('/',function(req,res){
    res.send("hello this is the final project")
});
