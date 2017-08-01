/* jshint esversion: 6 */

//TASK 1 - Camelize
function camelize(string) {
    let stringArray = string.split('-');
    console.log(stringArray);
    let resultArray = stringArray.map((word, index) => (index == 0) ? word : word[0].toUpperCase() + word.slice(1));
    console.log(resultArray);
    return resultArray.join("");
}

//console.log(camelize("a-short-story-by-me"));

//Task 2
function filterRange(array, a, b) {
    return array.filter(number => (number >= a && number <= b));
}

//array = [5, 3, 8, 1, 2, 4, 6, 7, 3];
//console.log(filterRange(array, 1, 4));

//Task 3

function filterRangeInPlace(array, a, b) {

    for (let i = 0; i < array.length; i++) {
        let val = array[i];
        //console.log("Loop value: " + val);

        //console.log("Loop index: " + i);

        if (val < a || val > b) {
            //console.log("Value: " + val);
            //console.log("Index: " + i);
            array.splice(i, 1);
            i--;
            //console.log("Reset Index: " + i);
        }
    }
    return array;
}

//console.log(filterRangeInPlace(array, 1, 4));

//Task 4 - Sort Reverse

//let array = [5, 2, 1, -10, 8];

function sortNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

//console.log(array.sort(sortNumeric).reverse());

//console.log(array.sort((a, b) => b - a));

//Task 5 - Copy sort

//let array = ["HTML", "Javascript", "CSS"];

function copySorted(array) {
    return array.slice().sort();
}

// console.log(array);
// console.log(copySorted(array));
// console.log(array);

//Task 6 - Map to names

let john = { name: "John", surname: "Smith", id: 1, age: 25 };
let peter = { name: "Peter", surname: "Hunt", id: 4, age: 4 };
let mary = { name: "Mary", surname: "Key", id: 5, age: 11 };

let users = [john, peter, mary];

let names = users.map(item => item.name);

let usersMapped = users.map(item => ({ fullName: item.name + " " + item.surname, id: item.id }));


//console.log(usersMapped);

//console.log(usersMapped[0].fullName);
//console.log(users);

//Task 7 - Sort by name

function sortByName(users) {
    return users.sort(function(userA, userB) {
        let nameA = userA.name.toUpperCase();
        let nameB = userB.name.toUpperCase();
        if (nameA > nameB)
            return 1;
        if (nameA == nameB)
            return 0;
        if (nameA < nameB)
            return -1;
    });
}

function sortByName2(users) {
    users.sort((a, b) => a.name > b.name);
}

sortByName2(users);
//console.log(users);

let compare = users[1].name > users[2].name;

//console.log(compare);

//Task 8 - Get average age

function getAverageAge(users) {
    let n = users.length;
    let totalAge = users.reduce((sum, value) => sum + value.age, 0);
    return totalAge / n;
}

//console.log(getAverageAge(users));

//Task 9 - Unique array elements

let arr = [1, 2, 3, 9, 2, 4, 5, 6, 8, 6, 9, 1];
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(array) {
    let uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        let elem = array[i];
        if (array.indexOf(elem) === array.lastIndexOf(elem)) {
            uniqueArray.push(elem);
        }
    }
    return uniqueArray;
}

console.log(unique(strings));