const p1 = new Promise((resolve, reject) => 
    setTimeout( () => resolve('promise 1 terminou'), 3000 ));

const p2 = new Promise((resolve, reject) => 
    setTimeout( () => resolve('promise 2 terminou'), 1000 ));

// Promise.race(
//   [p1, p2]
// )
// .then(console.log)
// .catch(console.log);

console.log(p1);


// const delay = milliseconds => data => 
//   new Promisse((resolve, reject) => 
//     setTimeout(() => resolve(data), milliseconds));

