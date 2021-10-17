let array = [2, 3, -5, -2, 4];

function adjacentElementsProduct(inputArray) {
    let max = inputArray[0] * inputArray[1];
    for(let i = 0; i < inputArray.length - 1; i++) {
        let temp = inputArray[i] * inputArray[i + 1];
        if(temp > max){
            max = temp;
        }
    }
    return max;
}

const result1 = adjacentElementsProduct(array);
console.log(result1);