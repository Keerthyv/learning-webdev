/* jshint esversion: 6 */
// Task 1
let styles = ["Jazz", "Blues"];
//console.log(styles);

styles.push("Rock-n-Roll");
//console.log(styles);

//console.log(styles.length);

midValue = Math.round(styles.length / 2) - 1;
//console.log(midValue);
styles[midValue] = "Classics";
//console.log(styles);

//console.log(styles.shift());
//console.log(styles);
styles.unshift("Rap", "Reggie");
//console.log(styles);

// Task 2 - sumInput

function sumInput() {
    do {
        let array = [];
        let input = +prompt("Enter a value", 0);
        array.push(input);
    } while (input != "null" || "" || NaN);
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}