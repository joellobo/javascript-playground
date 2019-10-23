
const test = ((x) => x + 1)(100);
//const res = test(100);
console.log(test);


const promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('foo');
    }, 300);
});


