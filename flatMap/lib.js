
console.log('passo 1:', Array.prototype.$flatMap);

if (!Array.prototype.$flatMap) {
    Array.prototype.$flatMap = function(cb) {
        return this.map(cb).reduce((destArray, array) =>
            destArray.concat(array), []);
    };
}

console.log('passo 2:', Array.prototype.$flatMap);