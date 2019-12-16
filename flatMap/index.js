require('./lib.js');

let numbers = [
    [0],
    [1],
    [2],
];

console.log(numbers.$flatMap(number => number.item));