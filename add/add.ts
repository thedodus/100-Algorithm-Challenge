function add(num1, num2) {
    return num1 + num2;
}

function add2(...numbers) {
    return numbers.reduce((prevVal, currentVal) => prevVal + currentVal);
}
console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1,2,3,4,5));
console.log(add2(2,3));

