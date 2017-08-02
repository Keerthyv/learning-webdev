function random(min, max) {
    return min + Math.random() * (max + 1 - min);
}

console.log(random(1, 5));
console.log(Math.floor(random(1, 5)));