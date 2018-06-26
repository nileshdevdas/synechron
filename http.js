var http = require("http");

var Server = http.createServer(function(request, response) {
  console.log(request.url)
  switch (request.url) {
    case "/test":
      response.end("/test");
      break;
    case "test1":
      response.end("/test1");
      break;
    default:
      response.end("no such url");
  }

});
Server.listen(5000);
