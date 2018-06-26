var fs = require("fs"); // import the file system package
var utils = require("./utils")// why .utils and why utils
                              // this not a library from the npm
                              // this local package only visible to you
console.log(http);
utils.print();
utils.edit();
console.log(process.env.npm_config_workdir); // --args
console.log(process.argv[2]); // print command line args
fs.readFile('d:/user.json', 'UTF-8', function(err, data){ // read the file
  if(err){ // check if error exists
    console.log("Error Occured ");
    console.log(err);// print the error
  }else{
    var user = JSON.parse(data); // if no error parse the data
    console.log(user.name); // traverse the name attribute
    console.log(user.age); // traverse the age attribute
  }
});
