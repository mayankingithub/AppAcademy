function logEach(array) {
  array.forEach(function(ele, i , arr) {
    console.log(i + ": " + ele);
  });
}

//logEach(["Anthony", "John", "Carson"]);

function maxValue(array, cb) {
  var max = null;
  array.forEach(function(ele, i , arr) {
    if (ele > max) {
      max = ele;
    }
  });
  return max;
  }

// maxValue([12, 6, 43, 2], function(max) {
//   console.log(max);
// });

//console.log(maxValue([12, 6, 43, 2]));

function wordYeller(sentence) {
  var excArr = [".", ",", "!", "?", ";", ":"];
  var storeArr = sentence.split(" ");
  var newEle = [];

  storeArr.forEach(function(ele, i, arr) {
    //var store = ele.slice(-1);   // lastWord
    //console.log(store);
    if(excArr.indexOf(ele[ele.length -1]) === -1) {
      newEle.push(ele + "!");
    } else {
      newEle.push(ele);
    }
  });
  return newEle.join(" ");
}

// var sent = "Stop it now! Please, wont you stop?";
// var yelledWords = wordYeller(sent);
// console.log(yelledWords);

function divisibleByNPairSum(array, n) {
  storeArr = [];
  array.forEach(function(ele, i, arr) {
    array.forEach(function(newEle, newI, newArr) {
      if ((newI > i) && ((ele + newEle)% n === 0)) {
        storeArr.push([i,newI]);
      }
    });
  });
  return storeArr;
}

//console.log(divisibleByNPairSum([1, 6, 3, 4, 2, 0], 3));

function peakFinder(array) {
  var newArr = [];
  array.forEach(function(ele, i) {
    if (i === 0  && ele > array[i+1]) {
      newArr.push(i);
    }
    else if (i === array.length - 1 && ele > array[i-1]) {
      newArr.push(i);
    }
    else if (ele > array[i+1] && ele > array[i-1]) {
      newArr.push(i);
    }
  });
  return newArr;
}

 console.log(peakFinder([ 2, 1, 2, 3, 4, 5 ]));
