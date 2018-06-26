var express = require("express");
var app = express();
app.get("/login", function(req,res){
  console.log("you called login");
  var user = {};
  user.username = "nilesh";
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify(user));
});

app.get("/logout", function(req,res){
  console.log("You called logout")
});

var server = app.listen("5000", function(){
});
