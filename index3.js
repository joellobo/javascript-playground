
const props = {width: 100, height:200, length: 10};

console.log(props);
// { width: 100, height: 200, length: 10 }

const { length, ...other } = props;

console.log(length);
// 10

console.log(other);
// { width: 100, height: 200 }