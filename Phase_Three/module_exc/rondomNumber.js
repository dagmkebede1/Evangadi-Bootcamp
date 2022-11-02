const math = require("mathjs");

let random = () => {
  return math.ceil(math.random() * 10);
};

module.exports.random = random;
let result = random();
// console.log(result);
