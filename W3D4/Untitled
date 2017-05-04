var fs = require("fs");

function getRecordsFromFile(filename) {
  fs.readFile(filename, function(err, data) {
    if (err) {
      console.log("---Error---");
      console.log(err);
      return;
    }

    console.log(data);
  })
}

getRecordsFromFile("data.txt");
