// Principle : "Understand the question very well first"
// Principle 2: "in order to solve big problems break the problems in to smaller pieces of problems"
// Principle 3: "Don't Care about the look of your code, focus on your functionality"
// Principle 4: "clean your Code, Write it well or Refactor it, so that you can maintain them well"

// Question 1 Given an array of numbers, write a function that prints in the console another array
// which contains all the even numbers in the original array, which also have even indexes only.
// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

function newArrayFunction(array) {
  let newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 && i % 2 == 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
// let result = newArrayFunction([0, 1, 2, 3, 4]);
// console.log(result);

// ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

function getOnlyEven(array) {
  let evenArray = [];
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 !== 0 || i % 2 !== 0) {
      } else {
        evenArray.push(array[i]);
      }
    }
  } else {
    console.log("this is not Array");
  }
  return evenArray;
}
// console.log(getOnlyEven([0, 1, 2, 3, 5]));

// Question 2
// ● Create a function that takes a two-digit number as an parameter and prints "Ok" in
// the console if the given string is greater than its reversed digit version. If not, the
// function will print "Not ok"
// ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

//Method 1
function reverseCompare(number) {
  let numString = number.toString();
  let reversed = "";
  for (let i = numString.length - 1; i >= 0; i--) {
    reversed = reversed + numString[i];
  }
  if (number > reversed) {
    return "OK";
  } else if (reversed > number) {
    return "not OK";
  } else {
    return "neither OK nor not OK";
  }
}
// console.log(reverseCompare(72));

//Method 2
let reverseCompare = (number) => {
  let numstring = number.toString();
  let reversed = "";
  for (let i = numstring.length - 1; i >= 0; i--) {
    reversed = reversed + numstring[i];
  }
  if (number > reversed) {
    return "OK";
  } else if (reversed > number) {
    return "not Ok";
  } else {
    return "not Our Concern";
  }
};

// let result = reverseCompare(72);
// console.log(result);

// Question 3
// ● Write a function that takes a positive integer and returns the factorial of the number.
// Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
// factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
// 4 * 3 * 2 * 1 = 24)
// ○ Test 1: returnFactorial(5) outputs 120
// ○ Test 2: returnFactorial(6) outputs 720
// ○ Test 3: returnFactorial(0) outputs 1

function factorial(number) {
  if (number < 0) {
    return "please input a positive number";
  }
  var numberFactorial = 1;
  for (var i = 0; i < number; i++) {
    numberFactorial *= number - i;
  }
  return numberFactorial;
}
// console.log(factorial(0));

function returnFactorial(number) {
  if (number >= 0) {
    let facutorial = 1;
    for (let i = 0; i < number; i++) {
      facutorial = facutorial * (number - i);
    }

    return facutorial;
  } else {
    return "we are not told to do so!";
  }
}

// console.log(returnFactorial(0));

// Question 4 (Meera array)
// ● A Meera array is defined to be an array containing only numbers as its elements and for
// all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
// because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
// 2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
// array of numbered elements and prints “I am a Meera array” in the console if its array
// does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
// Meera array”
// ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
// 2 is 10
// ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
// *2 is -6

// if there times two the item in the array is not found in the array it is called "MEERA ARRAY"

// the reverse is "NOT MEERA ARRAY"

//Method 1

function Meera1(array) {
  let n = 0;
  for (let i = 0; i < array.length; i++) {
    n = array[i] * 2;
  }
  if (array.includes(n)) {
    return "I am Not Meera Array";
  } else {
    return "I am Meera Array";
  }
}

// Method 2
function checkMeera(array) {
  let answer = "";
  for (var i = 0; i < array.length; i++) {
    let multiple = array[i] * 2;

    if (array.includes(multiple)) {
      answer = "I am NOT a Meera array";
    } else {
      answer = "this is Meera Array";
    }
  }
  return answer;
}

// console.log(checkMeera([7, 4, 9]));

//Method 3

function Meera(array) {
  let n = 0;
  result = "";
  for (let i = 0; i < array.length; i++) {
    n = array[i] * 2;
    // console.log(n);
    for (let j = 0; j < array.length; j++) {
      if (n == array[j]) {
        result = "I am Not Meera Array";
        break;
      } else if (n != array[j]) {
        result = "I am Meera Array";
      }
    }
  }
  return result;
}
// console.log(Meera([10, 4, 0, 5]));

// function anotherMeera(array) {

// Question 5 (Dual array)
// ● Define a Dual array to be an array where every value occurs exactly twice. For example,
// {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
// occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
// times) Write a function named isDual that returns 1 if its array argument is a Dual array.
// Otherwise it returns 0.

// test cases
let DualArray = [1, 2, 1, 3, 3, 2];
let notDual = [2, 5, 2, 5, 5];
let notDual1 = [3, 1, 1, 2, 2];

function isDual(array) {
  let identical = 0;
  let answer = "";
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        identical++;
      }
    }

    if (identical == 2) {
      identical = 0;
      answer = "this is a Dual Array";
    } else {
      answer = "this is Not Dual Array";
    }
  }
  return answer;
}
// console.log(isDual(DualArray));

// Question 6
// ● Write a function that takes the number of seconds and returns the digital format clock
// time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day

// console.log(Math.floor(3.56));

function secondsToHour(seconds) {
  if (seconds / 3600 > 24) {
    return "00";
  } else {
    return Math.floor(seconds / 3600);
  }
}

function secondsToMinutes(seconds) {
  let minute = 0;
  if (seconds % 3600 >= 60) {
    for (var i = 0; i < seconds % 3600; i += 60) {
      minute = minute + 1;
    }
  } else {
    return "00";
  }
  return minute;
}

function digitalClock(seconds) {
  const hour = secondsToHour(seconds);
  const minute = secondsToMinutes(seconds);
  let second;
  if (seconds % 3600 <= 60) {
    second = seconds % 3600;
  } else {
    second = "00";
  }

  const Digital = hour + ":" + minute + ":" + second;
  return Digital;
}

// console.log(digitalClock(87000));
