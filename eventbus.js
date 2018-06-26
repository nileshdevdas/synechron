//import the event api
var events = require("events");

// initialize the registry
var eventBus = new events.EventEmitter();

// register a listener
eventBus.on("userLoginEvent", function(user){
   console.log("Yes i recevied a user login Event");
   console.log("User logged in is " + user.username);
})

// fire a event
var user = {};
user.username = "nilesh";
eventBus.emit("userLoginEvent", user);
