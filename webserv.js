var http = require("http");
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
   response.end("You Finished Login");
}
function handleLogout(request, response){
  response.end("You Finished Logout");
}
function handleError(request, response){
  response.end("OOPS Wrong Url ");
}
