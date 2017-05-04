// function bar(cb) {
//   console.log("before");
//   cb();
//   console.log("after");
// }
//
// bar(function() {
//   console.log("callback");
// });

// function returnTheAnswer(ans) {
//   return "The answer is" + ans + ".";
// }
//
// function add(num1, num2, cb) {
//   var sum = num1 + num2;
//   return cb(sum);
// }
//
// console.log(add(5,6, returnTheAnswer));
//
// function returnTheAnswer(ans) {
//   return "The answer is " + ans + ".";
//  }
//
// function concat(str1, str2, cb) {
//   var str = str1 + str2;
//   return cb(str);
// }
//
// console.log(concat("2", "3", returnTheAnswer));

//Array.prototype.forEach

var arr = ["a", "b", "c"];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   console.log(i);
//   console.log(arr);
// }
//
// arr.forEach(function(ele,idx,array) {
//   console.log(ele);
//   console.log(idx);
//   console.log(array);
// });

// var cat = {
//   name: "Fluffykins",
//   farFoods: ["tuna", "meow mix", "foie gras"],
//   eat: function() {
//     this.farFoods.forEach(function(food) {
//       console.log(this.name + " eats " + food);
//     }.bind(this));
//   }
// }
//
// cat.eat();

//Higher Order Functions

//1) takes in a function as a parameter
//2) returns a function

// var add10 = createAdder(10);
//
// console.log(add10);

// function createAdder(n) {
//   return function(m) {
//     return n + m;
//   };
// }

// function createAdder(n) {
//   return function(m) {
//     return function(o) {
//       return n + m + o;
//     }
//   };
// }
//
// var store = createAdder(6)(3)(2)
//
// console.log(store);

// function createNamer(first) {
//   return function(last) {
//     return first + " " + last;
//   };
// }
//
// var thomas = createNamer("Thomas");
// console.log(thomas("Claiborne"), thomas("Jerfferson"), thomas("Edison"));

function helloWorld(cb) {
  console.log("hello");
  cb();
}

function goodbyeWorld() {
  console.log("goodbye");
}

setTimeout(function() {
  helloWorld(goodbyeWorld);
}, 1000);
