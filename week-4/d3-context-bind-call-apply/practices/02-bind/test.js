const Employee = require('./employee')

let john = new Employee("John Wick", "Dog Lover");

// setTimeout(function() {
//   john.sayName();
// }, 2000);
// setTimeout(function() {
//   john.sayOccupation();
// }, 2000);

let hello = john.sayName;
let occupy = john.sayOccupation;

// let boundSayName = john.sayName.bind(john) // Also viable
// let boundSayOccupation = john.sayOccupation.bind(john) // Also viable
let boundSayName = hello.bind(john)
let boundSayOccupation = occupy.bind(john)

setTimeout(function() {
  console.log(boundSayName());
}, 2000);
setTimeout(function() {
  console.log(boundSayOccupation());
}, 2000);
