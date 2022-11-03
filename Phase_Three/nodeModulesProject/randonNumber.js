// The "randomNumber" module has a function called random(). The random
// function just returns a random number when it gets executed
// b. Execute the function inside the module
// c. Save the returned value in a variable and log the variable on the console. Now, run
// your module on the terminal to see the printed output
// d. Export your module so that it is accessible to other module

export function random() {
  return Math.round(Math.random() * 10); // 0 - 1: max: 0.999, min: 0.001
  //5.5 --- 6
  //5.4 --- 5
}

let result = random();

// export {random}

console.log(result);
