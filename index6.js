const numbers = [1,2,3,4,5,6,7,8,9,10];
const newNumbers = numbers.map(number => {
    if(number % 2) return ++number
    return number;
});
console.log(numbers);
console.log(newNumbers);
