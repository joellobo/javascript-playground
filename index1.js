const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

//console.log(target);
//console.log(returnedTarget);

const fruits = {name: 'apple', price: 10.2};
//console.log(fruits);


const prices = [10, 20, 30];

function tax(prices) {
    return prices.map(price => price + 0.1);
}

console.log(tax(prices));
