function mapCreator(callback) {
  return function(array) {
    var newArr = [];
    array.forEach(function(ele) {
    newArr.push(callback(ele));
    });
    return newArr;
  };
}

var squareMapper = mapCreator(function (el) {
  return el * el;
});

//console.log(squareMapper([1, 2, 3, 4]));

var obj = {
  one: "one",
  two: "something else",
  three: "three",
  four: "another thing."
};

function objectSelect(obj, callback) {
  var newObj = {};

  for (var key in obj) {
    if(callback(key, obj[key])) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

var matchingPairs = objectSelect(obj, function (key, val) {
 return key === val;
});

//console.log(matchingPairs);

function randomNumberGenerator(min,range) {
  var store = Math.floor((Math.random() * range) + min);
  return store;
}

console.log(randomNumberGenerator(1, 10));
