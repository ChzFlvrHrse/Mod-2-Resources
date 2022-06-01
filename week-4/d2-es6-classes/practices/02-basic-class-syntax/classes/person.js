class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(array) {
    if (!Array.isArray(array)) {
      return console.log("introducePeople only takes an array as an argument.")
    }

    for (let i = 0; i < array.length; i++) {
      if (!(array[i] instanceof Person)) {
        return console.log("All items in array must be Person class instances.")
      }
    }

    array.forEach(function(person) {
      console.log(person.introduce())
    })
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
