// Create another module called "mySecond":
// a. Add another function in this module with the same name as above (myMultiplier).
// This function takes a number as a parameter and returns the value that is 3 times
// the parameter
function myMultiplier(par) {
  return 3 * par;
}
// b. Execute the function inside the module. Pass the number 4 to the function
// c. Save the returned value in a variable and log the variable on the console. Now, run
let result = myMultiplier(4);
// console.log(result);
// your module on the terminal to see the printed output
// d. Export your "myMultiplier" function so that other modules can use it

export default myMultiplier;
