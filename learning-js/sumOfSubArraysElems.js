let subArrays = [
    [1, 2, 3],
    [2, 3, 4],
    [4, 5, 6]
];

console.log(subArrays[0]);

function arraySum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

function sumsOfSubArrays(subArrays) {
    let sumValues = [];
    let sub = [];
    let sumOfArray = 0;

    for (i = 0; i < subArrays.length; i++) {
        sub = subArrays[i];
        sumOfArray = arraySum(sub);
        sumValues.push(sumOfArray);
    }

    return sumValues;
}

console.log(sumsOfSubArrays(subArrays));