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

  it("should return sum of multiples", function() {
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
    expect(calculator.last()).toBe(120);
  });

  it("uses LAST result to return a sum", function() {
    const calculator = new Calculator();

    calculator.add(70, 25);
    expect(calculator.add("LAST", 5)).toBe(100);

    calculator.add(10, 25);
    expect(calculator.multiply("LAST", 5)).toBe(175);

    calculator.multiply(5,2);
    expect(calculator.add("LAST", 5)).toBe(15);
  });


  it("sets a slot number", function() {
    const calculator = new Calculator();

    calculator.add(10, 25);
    calculator.set_slot(1)
   expect(calculator.get_slot(1)).toBe(35);
  });

  it("uses memory slots to return a sum", function() {
    const calculator = new Calculator();

    calculator.add(15,9);
    calculator.set_slot(1)
    expect(calculator.add("SLOT_1",5)).toBe(29);

    calculator.add(10,9);
    calculator.set_slot(2)
    expect(calculator.multiply("SLOT_2",24)).toBe(456);

    calculator.multiply(10,5);
    calculator.set_slot(3)
    expect(calculator.multiply("SLOT_3",24)).toBe(1200);

    calculator.multiply(100,5);
    calculator.set_slot(4)
    expect(calculator.multiply("SLOT_4",16)).toBe(8000);
  });
  
});
