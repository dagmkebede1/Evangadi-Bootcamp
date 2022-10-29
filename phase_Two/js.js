//OOP

// blueprint, Design, Planning
// prototype,
// oop by constructor function

function houseDesign(model, type, color) {
  this.model = model;
  this.type = type;
  this.color = color;
}

let house1 = new houseDesign("G+3", "Residence", "Orange");
let house2 = new houseDesign("G+4", "Appartment", "Grey");
let house3 = new houseDesign("G+9", "Mall", "Red and White");

// house3.roof = "Metal"
houseDesign.prototype.roof = "Metal";
houseDesign.prototype.Buy = function () {
  console.log("i will buy a house in this year");
};

console.log(house3.roof);

//oop by ES6 style
class carDesign {
  constructor(model, type) {
    this.model = model;
    this.type = type;
  }
}

let car = new carDesign("RAV 4", "Automobile");
console.log(car);

// console.log(house3.model);

// const house = {
//   model: "G+3",
//   type: "Residence",
//   hibst: function () {
//     console.log(this);
//   },
// };
// console.log(house.model);
// house.color = "green"
// console.log(house)

// const house2 = {
//   model: "G+3",
//   type: "Residence",
// };
