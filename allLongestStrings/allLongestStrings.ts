function allLongestStrings(inputArray: string[]): string[] {
    let longestString = 0;
    for (let i = 0; i < inputArray.length; i++){
        longestString = inputArray[i].length > longestString ? inputArray[i].length : longestString;
    }
    return inputArray.filter(string => string.length >= longestString);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));