var fs = require("fs");

function getFileName(filename, cb) {
  fs.readFile(filename, "utf8", function(err, data) {
    if(err) {
      console.log("Error");
      console.log(err);
      return;
    }
    var store = data.split("\n");
      cb(store);
  });
}

// console.log(getFileName("newData.txt", function(array) {
//   console.log(array);
// }));

function detectWord(sentence, array, cb) {
    for (var i = 0; i < array.length; i++) {
      console.log(sentence.indexOf(array[i]));
     if (sentence.indexOf(array[i]) !== -1) {
       return true;
     }
  }
  return false;
}
function detectSentiment(filename, sentence, callback) {

  getFileName(filename, function(records) {
    var score = 0;
    var name;
    //console.log(records);
    for(var i = 0; i < records.length; i++) {
      name = records[i].split(" ");
      console.log(name);
      console.log(detectWord(sentence, name));
      if(detectWord(sentence, name)) {
        score += 1;
      }
    }
    callback(sentence, score);
  });
}

detectSentiment("newData.txt", "I love you", function(sentence, score) {
  console.log("~~~~Example 1~~~~")
  console.log("'" + sentence + "' has a score of " + score + ".");
});
