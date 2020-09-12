function almostIncreasingSequence(sequence: number[]): boolean {
    let count = 0;

    for (let i = 0; i < sequence.length; i++){
        if ( sequence[i + 1] < sequence[i]){
            count++;
        }
    }
    return count <= 1;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 