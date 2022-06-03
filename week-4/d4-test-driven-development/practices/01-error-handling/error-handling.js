// 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (e) {
    throw new Error("Argument must be an array");
  }
  return sum;
}

console.log(sum([1, 2, 3])) // prints 6
let res = sum(null);
console.log(res); // throws error

// 2.
// tests
function sayName(name) {
  if (typeof name === "string") {
    return name;
  } else {
      throw new TypeError("Argument must be string")
  }
}
console.log(sayName("Alex"));
console.log(sayName(1));

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }
  return greeting;
}

console.log(greet("Hello there!")) // prints greeting
console.log(greet()) // throws error
