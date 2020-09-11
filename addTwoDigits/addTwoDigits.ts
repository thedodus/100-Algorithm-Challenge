function addTwoDigits(n: any): number {
    return n.toString()
            .split("")
            .map(number => parseInt(number))
            .reduce((acc, val) => acc + val);
}

console.log(addTwoDigits(99));