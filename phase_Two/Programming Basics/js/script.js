// alert("your JS file is connected!!");
console.log("your JS file is connected Nerd!! go play the game :)");

// question 1
console.log(24 > 3);
console.log(2 < "12");
console.log(0 == 2);
console.log(2.0 === 2);
console.log(2.0 == "2");
console.log(2 < "John");
console.log(2 < NaN);
console.log("a".charCodeAt(0));
console.log(2 > "John");
console.log("2" < "2");
console.log("from here");
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
z += 3; //  5+3= 8
console.log(z);

// 5, the value of y
let m = 10;
let yy = m++;
console.log(yy); // value = 10, but if it was ++m = 11

// 6, what is the value of s
let n = 1;
let s = n !== 2;
console.log(s);

// 7, what is the output of this statement
console.log(+"2" + 2);
console.log(7 % 3);
console.log(2 + true);

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

let same = " samson";
let same1 = "meseret";
same[0].toUpperCase();

console.log(same.trim()[0].toUpperCase());

console.log(5 / 0);
