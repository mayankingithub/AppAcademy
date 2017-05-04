// var bar = 20;
//
// function foo(n) {
//   return n + bar;
// }
//
// foo(20);

// function createGreeter(firstName) {
//   var greeting = "Hello";
//   return function(lastName) {
//     return greeting + " " + firstName + " " + lastName;
//   };
// }
//
// var helloJake = createGreeter("Jake");
// helloJake("Smith");
//
// function createCounter() {
//   var count = 0;
//   return function() {
//     count++;
//     console.log(cound);
//   };
// }

//var foo = require("nameOfModule");

var fs = require("fs");

function getRecordsFromFile(filename, getCoolest) {
  fs.readFile(filename, "utf8", function(err, data) { //
    if (err) {
      console.log(err);
      console.log("Error");
      return;
    }
     var records = data.split("\n");
     getCoolest(records);
  });
}
//getRecordsFormFile("data.txt");

function mostCoolFromFile(filename, cb) {
  getRecordsFromFile(filename, function(records){
  var coolest;
  var coolestRating = -1;

  records.forEach(function(record) {
    var name = record.split(" ")[0];
    var rating = parseInt(record.split(" ")[1]);

    if (rating > coolestRating) {
      coolest = name;
      coolestRating = rating;
    }
  });
  cb(coolest);
});
}

mostCoolFromFile("data.txt", function(coolest) {
  console.log(coolest);
});
