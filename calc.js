module.exports = class Calculator {
  constructor() {
    this.memory = [];
  }
  //function that returns the sum of added numbers
  add() {
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
    }
    this.totalEquals = result;

    return result;
  }
  //function that returns the sum of multiples
  multiply() {
    let result = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
      result *= arguments[i];
    }
    this.totalEquals = result;

    return result;
  }
  //returns the last result
  last() {
    return this.totalEquals;
  }
  //sets a slot number
  set_slot(slotNumber) {
    this.memory.push(this.last());

    return this.memory[slotNumber - 1];
  }
  //gets a slot number
  get_slot(slotNumber) {
    return this.memory[slotNumber - 1];
  }
};
