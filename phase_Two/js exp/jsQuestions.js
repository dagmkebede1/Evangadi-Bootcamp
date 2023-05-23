// Question 5
// ● Write a function named myFifth that takes an array with two numbers in it as a parameter
// and prints the sum of the two numbers on console

// one way
function myFifth(arr) {
  console.log(arr[0] + arr[1]);
}

// myFifth([1, 2]);

// another way
function myFifth2([a, b]) {
  console.log(a + b);
}

// myFifth2([1, 2]);

// Question 6
// ● Write a function that takes an integer minutes and converts it to seconds

function toSeconds(minutes) {
  return minutes * 60;
}
// console.log(toSeconds(30));

// Question 7
// ● Create a function that takes a number as a parameter, increments the number by +1 and
// returns the result.
// || typeof num == "string" || typeof num == "boolean"
function increment(num) {
  if (isNaN(num) || parseFloat(num) == num) {
    return "not a number";
  }
  return num + 1;
}
console.log(increment(true));
// let arrowIncrement = (num) => num + 1;

// console.log(arrowIncrement(-3));

// Question 8
// ● Write a function that takes the base and height of a triangle and returns its area.

function triArea(base, height) {
  return 0.5 * (base * height);
}

// Question 9
// ● Create a function that returns the total number of legs of all the animals. In this challenge, a
// farmer is asking you to tell him how many legs can be counted among all his animals. The
// farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember:
// the farmer wants to know the total number of legs and not the total number of animals.

function animals(chickens, cows, pigs) {
  return chickens * 2 + cows * 4 + pigs * 4;
}

// Question 10 (not from edabit.com)
// ● Create a function that takes an array containing only TWO numbers as a parameter and
// returns a value that is 3 times the first element of the array.

function twoArray([a, b]) {
  return a * 3;
}

function threeTimes(arr) {
  return arr[0] * 3;
}

// Question 11
// ● Create a function that returns true when num1 is equal to num2; otherwise return false.

function isSameNum(num1, num2) {
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

// Question 12
// ● Create a function that takes an integer and returns true if it's divisible by 100, otherwise
// return false

function divisible(num) {
  if (num % 100 === 0) {
    return true;
  } else {
    return false;
  }
}

// Question 13
// ● Create a function that takes a number as an argument and returns "even" for even numbers
// and "odd" for odd numbers.

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// Question 14
// ● Create a function that returns
// ○ “Invalid score” if score is above 100 or score is a negative number
// ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
// ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
// ○ “Grade C” for any score below 79

function grade(score) {
  if (score >= 90 && score <= 100) {
    return "Grade A";
  } else if (score >= 80 && score <= 89) {
    return "Grade B";
  } else if (score >= 79) {
    return "Grade C";
  } else {
    return "Invalid score";
  }
}

// function scoreing(score) {
//   switch (78) {
//     case (score => 90 && score <= 100):
//       return "Grade A";
//       break;
//     case (score => 80 && score <= 89);
//       return "Grade B";
//       break;
//     case score <= 79:
//       return "Grade C";
//       break;
//     default:

//         break;
//   }
// }
// console.log(scoreing(90));
