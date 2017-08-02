/* jshint esversion: 6 */

let map = new Map();

map.set(1, "name");
map.set(2, "surname");
map.set(3, "age");

//console.log(map);

map.set(4, "id")
    .set(5, "visitCount")
    .set(6, "userName");

let john = { name: "john", id: 1 };

map.set(john, "John");

// let map2 = new Map(Object.entries({
//     name: "Kitty",
//     id: 2
// }));

//console.log(Object.entries(john));

// Tasks

//Task 1 - Unique elements from array

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function uniqueElem(array) {
    return Array.from(new Set(array));
}

//console.log(uniqueElem(values));

//Task 3 - Iterable keys

let mapOfKeys = new Map();

mapOfKeys.set('name', 'Kitty');
mapOfKeys.set('age', 27);

let keys = [];
keys = Array.from(mapOfKeys.keys());

keys.push("phone");

//console.log(keys);

//Task - Destructuring

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {

    let maxSalary = 0;
    let answer = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            answer = name;
        }
    }

    return answer;
}

//console.log(topSalary(salaries));

// DATE and TIME

let date = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log(new Date(date));