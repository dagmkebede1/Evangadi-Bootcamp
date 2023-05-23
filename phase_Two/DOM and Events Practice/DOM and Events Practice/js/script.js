let s = document.getElementById("sample1"); //1.1
// s.style.display = "none";
// console.log(s);
// console.log(s.innerText);

// selections methods
let byClass = document.getElementsByClassName("blue");
let byNode = document.querySelectorAll(".blue");

let byId = document.getElementById("techCompanies");

// byId.innerHTML = `<li class="blue" >hi there</li>`;
// console.log(first)
console.log(byClass);
byNode.forEach((item) => console.log(item));
// console.log(byNode.forEach((item) => item));

// //question two
let t = document.getElementById("techCompanies"); //2.1
// console.log(t);

let q = document.querySelector("#techCompanies"); //2.2
// console.log(q);
let allTEchCompany = document.querySelectorAll("#techCompanies");
// console.log(allTEchCompany);
// console.log(allTEchCompany[0].children.length); //2.3

// let r = document.getElementsByClassName("red"); //2.4
// console.log(r);
// let byqall = document.querySelectorAll(".red");
// console.log(byqall);

// let ne = document.createElement("li"); //2.5
// ne.textContent = "Facebook";
// document.getElementById("techCompanies").appendChild(ne);

// ne.className = "blue"; //2.6
// let blue = document.querySelectorAll(".blue");
// //console.log(blue);
// let blueComp = document.getElementById("blueCompanies");
// let blueresult = document.createElement("p")
// blueresult.textContent = blue.length;
// blueComp.appendChild(blueresult); //2.8

// //question 3

// let bg = document.getElementById("yesBackground");
// bg.onclick = mylight;

// function mylight() {
//   document.body.style.backgroundColor = "#99ecff";
// }

// let bg1 = document.getElementById("noBackground");
// bg1.onclick = noclor;

// function noclor() {
//   document.body.style.backgroundColor = "";
// }

// //question 3 another answer addeventlisner
// // let bg = document.getElementById("yesBackground");
// // bg.addEventListener ("click",mylight) ;

// // function mylight() {
// //   document.body.style.backgroundColor = "#99ecff";
// // }

// // let bg1 = document.getElementById("noBackground");
// // bg1.addEventListener("click",noclor) ;

// // function noclor() {
// //   document.body.style.backgroundColor = "";
// // }

// // question 4
// using tradational dom manipulation
// let form1 = document.getElementById("adder");
// let result1 = document.getElementById("sum");
// // event
// let submitBtn = document.getElementById("submittt");
// submitBtn.onclick = myfunction;

// function myfunction(kk) {
//   kk.preventDefault();
//   let firstval = document.getElementsByName("first-value")[0].value;
//   let secondval = document.getElementsByName("second-value")[0].value;

//   if (firstval == "" || secondval == "") {
//     result1.innerHTML = "please enter both values";
//     result1.style.color = "red";
//   } else if (isNaN(firstval) || isNaN(secondval)) {
//     result1.innerHTML = "please enter both values as a Number";
//     result1.style.color = "blue";
//   } else {
//     let total = Number(firstval) + Number(secondval);
//     result1.innerHTML = total;
//     result1.style.color = "green";
//   }
// }

// // use eventlisner
let form = document.getElementById("adder");
let result = document.getElementById("sum");

let submitBtn = document.getElementById("submittt");
submitBtn.addEventListener("click", myfun);

function myfun(ll) {
  ll.preventDefault();

  let firstval = document.getElementsByName("first-value")[0].value;
  let secondval = document.getElementsByName("second-value")[0].value;

  if (firstval == "" || secondval == "") {
    result.innerHTML = "please enter both values";
    result.style.color = "red";
  } else if (isNaN(firstval) || isNaN(secondval)) {
    result.innerHTML = "please enter both values as a Number";
    result.style.color = "blue";
  } else {
    let total = Number(firstval) + Number(secondval);
    result.innerHTML = total;
    result.style.color = "green";
  }
}
