let array = [1, 2, 3, 4, 5, 6];

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

let subArrays = constructSubArrays(array);
console.log(subArrays);