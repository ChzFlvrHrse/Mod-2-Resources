const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let nums = [];
  for (let i = 1; i <= 10; i++) {
    nums.push(addNums(i * increment))
  }
  return nums
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let nums = [];
  for (let i = 1; i <= 10; i++) {
    nums.push(addManyNums(i * increment))
  }
  return nums;
}

module.exports = [addNums10, addManyNums10];
