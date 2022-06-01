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
      console.log("introducePeople only takes an array as an argument.")
      return;
    }

    for (let i = 0; i < array.length; i++) {
      if (!(array[i] instanceof Person)) {
        console.log("All items in array must be Person class instances.")
        return;
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
