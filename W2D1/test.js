var students1 = [
  { name : "Anthony" },
  { name : "Winnie" },
  { name : "Pawandeep" }
];

//Write a function that will print the name of all the students
//Example
// printNames(students1)
// Anthony
// Winnie
// Pawandeep

function printNames(students) {
    var obj = {};
    for(var i = 0; i<students.length; i++) {
      var person = students[i];
      var name = person.name;
      console.log(name);
    }
}
printNames(students1);

var students2 = [
  {
    name : "Anthony",
    id : 0
  }, {
    name : "Winnie",
    id : 1
  }, {
    name : "Pawandeep",
    id : 2
  }
];

//Write a function that will print the name and id of all the students
//Example
// printStudents(students2)
// Anthony is student #0
// Winnie is student #1
// Pawandeep is student #2

function printStudents(students) {
   for(var i =0; i<students.length; i++) {
     var name = students[i].name;
     var id = students[i].id;
     console.log(name + "is student #" + id);
   }
}

printStudents(students2);

//~~~~~3
var students3 = [
  {
    name : "Anthony",
    id : 0,
    grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
  }, {
    name : "Winnie",
    id : 1,
    grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
  }, {
    name : "Pawandeep",
    id : 2,
    grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
  }
];

//Write a function that will print the name of the student and their highest test score
//Example
// printBestGrade(students3)
// Anthony 84
// Winnie 100
// Pawandeep 92

function printBestGrade(students) {
  for (var i =0; i<students.length; i++) {
    var largest = null;
    var name = students[i].name;
    var grades = students[i].grades;
    for( var j =0; j <grades.length; j++) {
      var scores = grades[j].score;
      if(scores>largest){
        largest = scores;
      }
    }
          console.log(name + " " + largest);
    }

  }

printBestGrade(students3);

function printAverageGrade(students) {
  for (var i =0; i<students.length; i++) {
      var average;
      var largest = null;
      var sum = 0;
      var name = students[i].name;
      var grades = students[i].grades;
      for( var j =0; j <grades.length; j++) {
        var scores = grades[j].score;
            sum += scores;
            average = sum/grades.length;
        }

            console.log(name + " " + average);
    }
}
printAverageGrade(students3);
