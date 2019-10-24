
const props = {width: 100, height:200, length: 10};

console.log(props);

const { length, ...other } = props;

console.log(length);

console.log(other);