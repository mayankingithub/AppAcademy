//******************************myForEach(arr, cb)*************

var myForEach = function(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
};

// myForEach([1,2,3], function(ele, i, arr) {
//   console.log(ele + " is at position " + i + " in array " + arr);
// };

//******************************mySelect(arr, cb)****************

var mySelect = function(arr, cb) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if(cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// console.log(mySelect([1,2,3,4,5,6], function(ele, i, arr) {
//  return (i % 2 === 0);
// }));

//*******************************myReject(arr, cb)***************

function myReject(arr, cb) {
  var rejectArr = [];
  myForEach(arr,function(ele, i, arr){
    if(!cb(ele, i, arr)) {
      rejectArr.push(ele);
    }
  });
  return rejectArr
}
// console.log(myReject([1,2,3,4,5,6], function(ele, i, arr) {
//  return (i % 2 === 0);
// }));

//********************************myMap(arr,cb)******************

function myMap(arr,cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(cb(arr[i],i,arr));
  }
  return newArr;
}

// console.log(myMap(["A", "B", "C"], function(ele, i, arr) {
//   return ele + i;
// }));

//******************************createExpFunc(num)****************

function createExpFunc(exp) {
  return function(base) {
    var store = base;
    for(var i = 1; i < exp; i++) { // or use Math.pow(base,exp);
      store *= base;
    }
    return store;
  };
}

var powerTwo = createExpFunc(10);
console.log(powerTwo(2));
