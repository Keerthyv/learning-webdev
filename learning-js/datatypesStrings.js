/* jshint esversion: 6 */

let string = "My name is Kitty";

//console.log(string.indexOf("i", 9));

//Task 1 - First character upper case
function ucFirst(string) {
    if (!string) return string;
    else return string[0].toUpperCase() + string.slice(1);
}

// console.log(ucFirst(""));

//Task 2 - Check for spam
function checkSpam(str) {
    newStr = str.toLowerCase();
    return (newStr.includes("viagra") || newStr.includes("xxx"));
}

// console.log(checkSpam("Free products of multiple ranges!"));

// Task 3 - Truncate text beyond certain length

function truncate(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength - 1) + "...";
    } else return text;
}

let text1 = "I am Keerthy, I am learning javascript. This is a learning project testing truncate function.";
let text2 = "Hi this is Keerthy!";

// console.log(truncate(text1, 20));

// Task 4 - Extract the currency value

function extractCurrencyValue(string) {
    return +string.slice(1);
}

//console.log(extractCurrencyValue("$120"));

// Testing string methods

let word = "abcdefghijkl";
console.log(word.slice(2));