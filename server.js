var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; //uppercase variable name is saying it shouldn't change

// app.get('/',function(req, res){ //get responds to http request methof
// 	res.send("Hello Express!");
// });

var middleware = require("./middleware.js");

app.use(middleware.logger); //important to put middleware uo top to run

app.get("/about",middleware.requireAuthentication,middleware.logger,function(req,res){
	res.send("About Richard Robinson");
});

app.use(express.static(__dirname + "/public")); //takes folder you wnt to expose

//console.log(__dirname); //gets path of directory
app.listen(PORT,function(){
	console.log("Express server started with port " + PORT + " !" );
}); //what port to listen