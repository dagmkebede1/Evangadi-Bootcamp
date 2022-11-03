import firstFunction from "./myFirst.js";
import secondFunction from "./mySecond.js";

let resultOne = firstFunction(5);
let resultTwo = secondFunction(5);

// console.log(resultOne, resultTwo);

// a. Import both functions from "myFirst" and "mySecond" modules inside of your

// "myCollector" module
// b. Pass the value 5 to both functions that are imported from "myFirst" and
// "mySecond" modules
// c. Run the "myCollector" module on your terminal to display the outputs on your
// console

// Second Phase Question

//  While you are in your "myCollector" module:
// a. Write a script inside of your "myCollector" module that passes the number 14 to
// your "myMultiplier" function that you imported from "myFirst" module and
// writes the returned value on a file called "results.txt". The result you write on the
// file should read like this: "The value of 14 when passed through the myMultiplier
// function is ( )."
// ■ Hint: You will need to find the core Node module that will allow you to
// create the “results.txt" file and write the result on this file

let Result = firstFunction(14);

import fs from "fs";

// fs.writeFile(
//   "results.txt",
//   `The value of 14 when passed through the myMultiplier
// function is (${Result}).`,
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File Created Successfully !");
//     }
//   }
// );

// b. Write another script inside of your "myCollector" module that passes the number
// 14 to your "myMultiplier" function that you imported from "mySecond" module
// and writes the returning value on the same file, the "results.txt" on a new line. The
// result you write on the file should read like this:
// "The value of 14 when passed through the myMultiplier function is ( )”.
// ■ Note: Make sure not to replace/remove what you wrote on your
// "results.txt" file previously.
// ■ Note: Also, make sure to add the new result on a new line, right below the
// result written previously.

// let Result2 = secondFunction(14);

// fs.appendFile(
//   "results.txt",
//   `The value of 14 when passed through the myMultiplier
// function is (${Result2}).`,
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File Created Successfully ! 222");
//     }
//   }
// );
