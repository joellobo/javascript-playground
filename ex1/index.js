require("./init");
const sum = require("./lib").sum;

const a = 1;
const b = 2;

const total = sum(a, b);

console.log(`Total:${total}`);
