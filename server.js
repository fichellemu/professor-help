//dependencies-core modules
var express=require('express');
var app= express();

var http=require('http');
var mysql=require('mysql');

//process.env.PORT || 5000
var server= app.listen(process.env.PORT || 5000,function(){
    console.log("Server started on heuroku")
});


//setup sql connection
//mysql://b0f34851335f6f:6917348c@us-cdbr-iron-east-01.cleardb.net/heroku_2d03868d61ad242?reconnect=true
const con = mysql.createConnection({
    host:"us-cdbr-iron-east-01.cleardb.net",
    user:"b0f34851335f6f",
    password: "6917348c",
    database: "heroku_2d03868d61ad242"
});

//run our engine{items:result}
app.set('view engine','ejs');
var obj = {};
app.get('/',function(req,res){   
    con.query("SELECT * FROM classes WHERE ClassID !=''", function(err,result){
        if (err){
            console.log("ERROR");
            return;
        }
        console.log("hello this is the final project");
        console.log(result);
        obj={items: result};
        res.render("index",{items:result});
        console.log(result[0].ClassID);
    });
});
