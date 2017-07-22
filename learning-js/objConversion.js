/* jshint esversion: 6 */

let details = {
    name: "Keerthy",
    age: 28,
    status: "Married"
};

console.log(details);

let setDetails = {};
let setOne = {};
setDetails.setOne = details;

console.log(setDetails.setOne);

console.log(setDetails);