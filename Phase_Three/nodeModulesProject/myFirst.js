// Inside the "myFirst" module, log a simple text that says "My first module" on
// the console.
// b. Run the module and see the output of the code you just wrote in this module
// console.log("My first module");
// c. Write a function called "myMultiplier" inside of your "myFirst" module. This
// function takes a single number as a parameter and returns a value that is 2 times
// the parameter
function myMultiplier(par) {
  return 2 * par;
}

// let myMultiplier = (par)=> 2*par

// d. Execute the function inside the module. Pass the number 4 to the function
// e. Save the returned value in a variable and log the variable on the console. Now, run

// your module on the terminal to see the printed output
let result = myMultiplier(4);
// console.log(result);
// f. Export your "myMultiplier" function so that other modules can use it

//ES6 Export Style

// Named Export
// export { myMultiplier};  // when we are going to import this function we MUST call the exact name.
// import { myMultiplier } from "./myFirst"
// import { myMultiplier as other } from "./mySecond"
// // comments
// myMultiplier
// other

// Default Export
export default myMultiplier;

//  // you don't need to call the exact name here.
// import yefelegachutin from "./myFirst"

// Using CommonJS

// Default
// module.exports.firstFunc = myMultiplier;

// console.log(module);

// module{

//     exports:{
//         firstFunc: myMultiplier;
//     }

// }

// exports.firstFunc = myMultiplier //

// const anyName = require("./myFirst")
// anyName.firstFunc

//Named Feature

// module.exports = { myMultiplier }
// let { myMultiplier } = require("./myFirst")
