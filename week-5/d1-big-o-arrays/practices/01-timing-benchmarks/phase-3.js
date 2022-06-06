const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  let nums = [];
  for (let i = 1; i <= 10; i++) {
    nums.push(addNums(i * increment))
  }
  return nums
}


function addManyNums10Timing(increment) {
  let nums = [];
  for (let i = 1; i <= 10; i++) {
    nums.push(addManyNums(i * increment))
  }
  return nums;
}


n = 1000000
console.time("addNums")
console.log(`addNums(${n}): `);
addNums10Timing(1000000);
console.timeEnd("addNums")

console.log("\n***********\n");

n = 1000
console.time("addManyNums")
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
console.timeEnd("addManyNums")
