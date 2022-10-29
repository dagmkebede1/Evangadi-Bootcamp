// "use strict";
// // OOP using function constructor
// const Students = function (firstName, lastName, IDs, birthYear) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.IDs = IDs;
//   this.birthYear = birthYear;
// };

// Students.prototype.calAge = function () {
//   return 2022 - this.birthYear;
// };

// Students.prototype.getBatch = function () {
//   let batch = Number(this.IDs.split("/")[1]);
//   console.log(batch);
// };

// const Samson = new Students("Samson", "Meseret", "4146/2022", 1996);
// const Result = Samson.calAge();

// // console.log(Samson)
// Samson.getBatch();
// Samson.calAge();
// console.log(Result);

// var variable = 4;
// console.log(variable);

// // document.addEventListener("DOMContentLoaded", () => {
// //   return test();
// // });

// // const test = function () {
// //   console.log("something");
// // };

// // console.log(Samson instanceof Students)
// // console.log(Samson.hasOwnProperty("firstName"))

// // console.log(Samson.__proto__ === Students.prototype)
// // console.log(Samson.__proto__)

// let arr = ["sami", "sami", 67, 67, 65];
// // Array.prototype.unique = function(){
// //   return [...new Set(this)]
// // }

// // console.log(arr); // Display the toString value of the Object
// // console.log(/foo/); // Display the Object tree
// // console.dir(/foo/);
// // console.dir(arr);

// //OOP using  ES6 syntax
// class Person {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   calAge() {
//     return new Date().getFullYear() - this.birthYear;
//   }
// }
// const Samson1 = new Person("Samson", 1996);
// // console.log(Samson1)
// // console.log(Samson1.calAge())

// function isNumber(a) {
//   if (typeof a === "number") {
//     return true;
//   } else if (typeof a === "string") {
//     return !isNaN(Number(a));
//   } else {
//     return false;
//   }
// }

// function addNumber(a, b) {
//   // console.log(isNumber(a))
//   if (isNumber(a) && isNumber(b)) {
//     return Number(a) + Number(b);
//   } else if (a || b) {
//     return a || b;
//   } else {
//     return "what you entered is not a number";
//   }
// }

// const result = addNumber("", 67)
// console.log(result)

// function someFUN([a, b]) {
//   return a * 3;
// }
// console.log(someFUN([2, 4]));

// function dd() {
//   let err = [];
//   for (var i = 0; i < 10; i++) {
//     // console.log(i)
//     err.push(i);
//     var samo = err;
//   }
//   return samo;
// }
// console.log(dd());

// let answer = "sami";
// // let quetion = window.prompt("please take a guess");

// let limit = 3;
// let i = 0;
// while (i < limit) {
//   i++;
// console.log(i)
// }

// function testCaseForSwitch(Case){
//   switch(Case){

//   case "sami":
//     console.log("i m sami")
//     break
//   case "john":
//     console.log(" i m john")
//     break
//   case "hunbelew":
//     console.log("i m hunbelew")
// }

// }
// testCaseForSwitch("hunbelew")

//for loop
//while loop

//log return

//array argument and parameter
// Global Scope
// let Global = 56;

// // Block Scope
// {
//   let th;
//   const re = 1;
//   var y;
// }
// //Function Scope
// function abc(){
//   let df;
//   var dsf;
//   const er=4;
// }

// function next10Sum(number) {
//   let sum = 0;

//   for (i = number + 1; i <= number + 10; i++) {
//     sum = sum + i;
//     console.log(i);
//   }
//   return sum;
// }
// let some = false;

// console.log(typeof some);
// console.log(next10Sum(7));

// let array = ["hunbelew", 78, "hibst", true, 78, "sami"];

// // console.log(array[0]);

// // for (let i = 0; i < array.length; i++) {
// //   // console.log(i);
// //   console.log(array[i]);
// // }

// function oddAndEven(array) {
//   let even = 0;
//   let odd = 0;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//       even = even + array[i];
//       // console.log(array[i]);
//     } else {
//       odd = odd + array[i];
//       console.log(array[i]);
//     }
//   }
//   console.log("even: " + even);
//   console.log("odd: " + odd);
//   console.log(even - odd);
// }

// oddAndEven([5, 6, 99, 8, 76, 4, 68, 44]);

let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};
