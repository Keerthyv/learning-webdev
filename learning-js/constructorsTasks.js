/* jshint esversion: 6 */

// Constructor Tasks
//TASK1: CALCULATOR
function Calculator() {
    this.read = function() {
        this.value1 = 20; // +prompt("Enter value1") --> for user input
        this.value2 = 30; // +prompt("Enter value2") --> for user input
    };
    this.sum = function() {
        return this.value1 + this.value2;
    };
    this.mul = function() {
        return this.value1 * this.value2;
    };
}

// let calculator = new Calculator();
// calculator.read();

// console.log("Sum = " + calculator.sum());

// TASK2: ACCUMULATOR

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        let a = 6; // +prompt("Enter a value to add"); --> for user input
        this.value = this.value + a;
    };
}

//let accumulator = new Accumulator(1);
//accumulator.read();
//accumulator.read();
//console.log(accumulator.value);

// TASK 3: EXTENDED CALCULATOR

function ExtendedCalculator() {

    let methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {
        let split = str.split(" ");
        let a = +split[0];
        let op = split[1];
        let b = +split[2];

        if (!methods[op]) {
            return `Method ${op} does not exist`;
        } else return methods[op](a, b);
    };

    this.addOperator = function(name, func) {
        methods[name] = func;
    };
}


let calc = new ExtendedCalculator();


calc.addOperator("*", (a, b) => a * b);
calc.addOperator("%", (a, b) => a % b);
calc.addOperator("/", (a, b) => a / b);

console.log(calc.calculate("21 + 2"));
console.log(calc.calculate("20 ** 2"));
console.log(calc.calculate("20 * 2"));
console.log(calc.calculate("20 / 2"));