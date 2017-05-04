var fs = require("fs");

function getRecordsFromFile(filename) {
  var records;
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

     records = data.split("\n");


  });
  return records;
}

console.log(getRecordsFromFile("data.txt")) ;

function mostCoolFromFile(filename) {
  var records = getRecordsFromFile(filename);
  var coolest;
  var coolestRating = -1;

  records.forEach(function(record) {
    var name = record.split(" ")[0];
    var rating = parseInt(record.split(" "))[1];

    if (rating > coolestRating) {
      coolest = name;
      coolestRating = rating;
    }
  });

    return coolest;
  }

  //mostCoolFromFile("data.txt");
