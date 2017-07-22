/* jshint esversion: 6 */

function User(name, age, country) {
    // >> not advised to use, but constructor works 
    // even without new if the following code is included <<
    //  if (!new.target) {
    //     return new User(name, age, country);
    // }
    this.name = name;
    this.age = age;
    this.country = country;
    if (age < 18) this.isAdmin = false;
    else this.isAdmin = true;
}

let user1 = new User("Kitty", 27, "India");
let user2 = new User("Dheeraj", 29, "India");
let user3 = new User("Triveni", 2, "US");
let user4 = new User("Saadhvi", 1, "UK");
let user5 = new User("May", 0);

console.log(user1);

let random = User("Jill", 18, "Ethiopia"); //trying without keyword "new"

console.log(random);

// TASKS

let obj = {};

function A() {
    return obj;
}

function B() {
    return obj;
}

let a = new A();
let b = new B();

console.log(a === b);