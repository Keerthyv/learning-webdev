/* jshint esversion: 6*/

let calculator = {
    read() {
        this.value1 = 28;
        this.value2 = 30;
    },
    sum() {
        return this.value1 + this.value2;
    },
    mul() {
        return this.value1 * this.value2;
    }
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());