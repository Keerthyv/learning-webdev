/* jshint esversion: 6 */

function constructSubArrays(array) {
    let subArrays = [];

    for (let startIndex = 0; startIndex < array.length; startIndex++) {

        for (let endIndex = startIndex + 1; endIndex <= array.length; endIndex++) {
            let arrayTemp = array.slice(startIndex, endIndex);
            subArrays.push(arrayTemp);
        }
    }
    return subArrays;
}

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

function findElemInArray(elem, array) {
    for (let i = 0; i < array.length; i++) {
        if (elem === array[i]) {
            return i;
        }
    }
    return "Not found";
}


function getAnswer(array) {
    let subArrays = constructSubArrays(array); // An array of all possible subarrays

    let sumOfSubArrays = sumsOfSubArrays(subArrays); //An array of sum of elememts of subarrays

    let maxSum = Math.max(...sumOfSubArrays);

    let indexOfMax = findElemInArray(maxSum, sumOfSubArrays);

    return [maxSum, subArrays[indexOfMax]];
}

const [maxSum, maximalArray] = getAnswer([1, -1, -2, -3, 4, 2, -1, 3, -4, 8, -2]);

console.log(maxSum);
console.log(maximalArray);