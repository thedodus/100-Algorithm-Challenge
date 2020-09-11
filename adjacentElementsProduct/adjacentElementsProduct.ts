function adjacentElementsProduct(inputArray: number[]): number {
    let highest = 0;
    for (let i = 0; i < inputArray.length - 1; i++){
        if (inputArray[i] * inputArray[i + 1] > highest){
            highest = inputArray[i] * inputArray[i + 1];
        }
    }
    return highest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3, 8, -9]));