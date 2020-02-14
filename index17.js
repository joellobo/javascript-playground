const sum1 = function() {
  return 1;
};

const sum2 = function() {
  return 2;
};

const sum3 = function() {
  return 3;
};

M = {
  a: sum1,
  b: sum2
};

console.log(M.a.toString());
console.log(M.b.toString());
console.log(M.a());
console.log(M.b());

M.a = sum3;
M.b = sum3;

console.log(M.a.toString());
console.log(M.b.toString());
console.log(M.a());
console.log(M.b());
