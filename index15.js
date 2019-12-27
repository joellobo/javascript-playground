const isSmaller = x => element => console.log(element < x);
const numbers = [1,2,3,4];
numbers.filter(isSmaller(10));