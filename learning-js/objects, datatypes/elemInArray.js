let array = [1, 4, 5, -1, -2, 6];

function findElemInArray(elem, array) {
    for (let i = 0; i < array.length; i++) {
        if (elem === array[i]) {
            return i;
        }
    }
    return "Not found";
}

console.log(findElemInArray(8, array));