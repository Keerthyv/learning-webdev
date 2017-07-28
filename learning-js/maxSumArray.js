/* jshint esversion: 6 */
//Task Contiguous subarray with maximal sum

let arrayNumbers1 = [1, -1, -2, -3, 4, 2, -1, 3, -4, 8, -2];
let arrayNumbers = [-1, -2, 3, 5, -6, 7, -1, 2, -9];
let sumObj = {};
let arraySum = [];

function maxSumSubArray() {
    let sum = arrayNumbers[0];
    let subArray = [];
    let sumArray = [];
    let indexArray = [];

    for (let i = 1; i < arrayNumbers.length; i++) {

        sum += arrayNumbers[i];
        sumArray.push(sum);
        maxSum = Math.max(...sumArray);

        if (sum <= 0) {
            sum = 0;
            subArray.length = 0;
            continue;
        } else {
            subArray.push(arrayNumbers[i]);
        }

        let currSum = sum;
        if (currSum > maxSum) {
            let indexAtMax = arrayNumbers[i];
        }


    }
    return { sumArray, subArray, indexAtMax };
}

sumObj = maxSumSubArray(arrayNumbers);
console.log(sumObj);