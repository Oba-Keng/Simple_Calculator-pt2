const Calculator = require("../calc.js");

describe("simple calculator that", function() {
  it("should return zero", function() {
    let calculator = new Calculator();

    expect(calculator.add(0, 0)).toBe(0);
  });

  it("should return negative number", function() {
    let calculator = new Calculator();

    expect(calculator.add(-1, -1)).toBe(-2);
  });

  it("should return sum of two numbers", function() {
    let calculator = new Calculator();

    expect(calculator.add(4, 5)).toBe(9);
  });

  it("can add multiple numbers", function() {
    let calculator = new Calculator();

    expect(calculator.add(1, 2, 3, 4)).toBe(10);
  });

  it("should return sum of two multiples", function() {
    let calculator = new Calculator();

    expect(calculator.multiply(1, 2)).toBe(2);
  });

  it("returns sum of any amount of multiples", function() {
    let calculator = new Calculator();

    expect(calculator.multiply(1, 2, 3, 4, 5)).toBe(120);
  });
  it("it returns the last result", function() {
    const calculator = new Calculator();
    calculator.add(2, 4);
    expect(calculator.last()).toBe(6);

    calculator.multiply(2, 3, 4, 5);
    expect(calculator.last()).toBe(240);
  });
  it("uses the last result", function() {
    const calculator = new Calculator();
    calculator.add(23, 55);
    let last = calculator.last();
    expect(calculator.add(last, 60)).toBe(138);

    expect(calculator.multiply(last, 2)).toBe(12168);
  });
  it("sets a slot number", function() {
    const calculator = new Calculator();

    calculator.add(10, 25);

    expect(calculator.set_slot(1)).toBe(35);
    expect(calculator.get_slot(1)).toBe(35);
  });
  it("gets a slot number", function() {
    const calculator = new Calculator();

    calculator.multiply(5, 25);

    let slot_1 = calculator.set_slot(1);

    expect(calculator.get_slot(1)).toBe(625);
    expect(calculator.add(slot_1, 5)).toBe(630);
  });
});
