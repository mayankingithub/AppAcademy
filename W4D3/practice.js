function concatSandwhich(word) {
  return function(str1, str2, str3) {
    // return str1 + " " + word + " " + str2 + " " + word + " " + str3;
    return [str1, word, str2, word, str3].join(' ')
  };
}

[1, 2, 3]

function countAdjacentSums(arr,d) {
  var count = 0;

  arr.forEach(function(ele, ind, arr) {
    if((ele + arr[ind + 1]) === d) {
      count += 1;
    }
  });

  return count;
}


function isogramMatcher(str1, str2) {
  var newArr = [];
  newArr[0] = 0;
  newArr[1] = 0;
  for (var i = 0; i < str1.length; i++) {
    for ( var j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j] && i === j) {
        newArr[0] += 1;
      } else if (str1[i] === str2[j] && i !== j) {
          newArr[1] += 1;
        }
    }
  }
  return newArr;
}

console.log(isogramMatcher("abcdf", "acbdf"));
