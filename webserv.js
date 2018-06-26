var http = require("http");
var events = require("events");
var EventEmitter = new events.EventEmitter();

var Server = http.createServer(function(request,response){
  switch(request.url){
      case "/login":
        handleLogin(request, response);
        break;
      case "/logout":
       handleLogout(request,response);
        break;
      default :
        handleError(request,response);
  }
});
Server.listen(5000);
function handleLogin(request, response){
  // json objects
   var user = {};
   user.username = "nilesh";
   user.password = "password"
   response.setHeader("content-type", "application/json");
   EventEmitter.emit("loginEvent", user);
   response.end(JSON.stringify(user));
}
function handleLogout(request, response){
  response.end("You Finished Logout");
}
function handleError(request, response){
  response.end("OOPS Wrong Url ");
}

EventEmitter.on("loginEvent", function(user){
  console.log("Event Received........");
  console.log(user);
})
