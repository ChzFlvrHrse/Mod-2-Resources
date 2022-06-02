class Employee {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }

  sayName() {
    return `${this.name} says hello`
  }

  sayOccupation() {
    return `${this.name} is a ${this.occupation}`
  }
}

module.exports = Employee;
