let user = {
    name: "John",
    age: 25,
    greet: function sayHello() {
        console.log("Hello" + this.name);
    }
}

let a = {
    name: "Keerthy",
    greet: user.greet
};

a.greet();
user.greet();