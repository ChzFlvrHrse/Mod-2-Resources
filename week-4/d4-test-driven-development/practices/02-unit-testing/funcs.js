function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if (typeof number === 'number') {
    return number % 2 !== 0;
  }
  throw new Error("Argument must be a number")
}

function myRange(min, max, step = 1) {
  let array = [];
  if (min < max) {
    for (let i = 0; i <= max; i+=step) {
      array.push(min + i)
    }
    return array;
  }
  return array;
}


module.exports = { isFive, isOdd, myRange };
