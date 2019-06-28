module.exports = class Calculator {
  constructor() {
    this.memory = [];
  }
  //function that returns the sum of added numbers
  add() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    this.total = sum;

    return sum;
  }
  //function that returns the sum of multiples
  multiply() {
    let sum = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
      sum *= arguments[i];
    }
    this.total = sum;

    return sum;
  }
  //returns the last result
  last() {
    return this.total;
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

// let calculator = new Calculator();
// calculator.add(1,2,3,4,5)
