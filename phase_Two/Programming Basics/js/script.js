// alert("your JS file is connected!!");
console.log("your JS file is connected!!");
// question 1

console.log(24 > 3);
console.log(2 < "12");
console.log(0 == 2);
console.log(2.0 === 2);
console.log(2.0 == "2");
console.log(2 < "John");
console.log(2 > "John");
console.log("2" < "2");
console.log("2" > "12");
console.log(1 == 1 || 3 == 2 || 3 == 7);
console.log(1 == 1 && 2 == 2 && 3 == 7);
console.log(1 == 1 || (2 == 2 && 3 == 7));
console.log(
  (1 == true && 0 > true) || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
);

//question 2

//1. Which expression returns true?
console.log("1" === 1);
console.log(1 == 1);
console.log(1 === 1);

//2,  the value of x
let x = 1 == true; // x = true
console.log(x);

// 3, the value of y
let xx = 10;
let y = xx > 5 && xx < 15; // y = true
console.log(y);

// 4,what is the value of z

let z = 5;
z += 3; // this mens z=z + 3 5+3= 8
console.log(z);
// 5, the value of y
let m = 10;
let yy = m++;
console.log(yy); // the answer is 10 why?

// 6, what is the value of s
let n = 1;
let s = n !== 2;
console.log(s); // the answer is true
// 7, what is the output of this statement
console.log(+"2" + 2); // the answer is 4 b/c first convert string to number.
console.log(7 % 3); // the reminder is 1
console.log(2 + true); // the answer is three b/c first convert string to number

// question 3
let a = 1;
let b = 2;
let c = a + b;
console.log(c);

// question 4
const firstName = "Samson";
const lastName = "Meseret";
const fullName = firstName + " " + lastName;
console.log(fullName);
