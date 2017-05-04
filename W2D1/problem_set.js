var divisibleByThreePairSum = function(array) {
  var arr = [];
  for(var i = 0; i < array.length; i++) {
    for(var j = i+1; j < array.length; j++) {
      if((array[i] + array[j]) %3 === 0 ) {
          arr.push([i,j]);
      }
    }
  }
      return arr;
};
// console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0]));

var alphabet = [
  "a","b","c","d","e",
  "f","g","h","i","j",
  "k","l","m","n","o",
  "p","q","r","s","t",
  "u","v","w","x","y",
  "z"
];

var numbers = [ "1","2","3","4","5","6","7","8","9","0" ];

var other = ["_", "."];

var isValidEmail = function(email) {
  var found = false;
  var arr = email.split("");
  for(var i = 0 ; i < arr.indexOf("@"); i++) {
    //console.log(i, arr[i]);
  if(alphabet.indexOf(arr[i]) !== -1 ||
  numbers.indexOf(arr[i]) !== -1 ||
  other.indexOf(arr[i]) !== -1) {
    found = true;
  } else {
    return false;
  }
  }
  for(var j = arr.indexOf("@") + 1; j<arr.length; j++) {
      //console.log("---"+j, arr[j]);
      if(alphabet.indexOf(arr[j]) !== -1 || arr[j] === "."){
        if(arr[j] === "."){
          for(var k = j+1; k<arr.length; k++) {
            if(arr[k] === ".") {
              return false;
            }
          }
        }
        found = true;
} else {
  return false;
}
}
return found;
};
//console.log(isValidEmail("junk@gmail.com"));
//console.log(isValidEmail("now.what@now.co"));

//console.log(isValidEmail("i_am_happy@feelings.net"));

//console.log(isValidEmail("my@website@gmail.com"));

//console.log(isValidEmail("webby@gmail.co.net"));

//console.log(isValidEmail("anthony@ira_ladson.com"));

//console.log(isValidEmail("anthony!@ladson.com"));

var peakFinder = function(array) {
  var arr = [];
  for(var i = 0; i < array.length; i++) {
    //console.log(i, array[i]);
    if(array[i-1] === undefined) {
      if(array[i]>array[i+1]) {
        arr.push(i);
    }
  }
    else if(array[i+1] === undefined) {
      if(array[i] > array[i-1]) {
        arr.push(i);
      }
    }
    else {
      if(array[i]>array[i+1] && array[i] > array[i-1]) {
        arr.push(i);
      }
    }
      }
  return arr;
};

console.log(peakFinder([1, 2, 3, 2, 1]));
console.log(peakFinder([2, 1, 2, 3, 4, 5]));
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]));
