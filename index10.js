// class Person3 {
//     constructor() {

//     }
// }

// const maria = new Person3({name: 'Maria', age: '20'});
// console.log(`id:${maria.toString()} maria.name:${jose.name} jose.age:${jose.age}`);


function Person(option) {
    this.name = option.name || '';
    this.age = option.age || '' ;
}

const jose = new Person({name: 'Jose', age: '18'});
console.log(`id:${jose.toString()} jose.name:${jose.name} jose.age:${jose.age}`);
console.log(jose.entries);



const Person2 = {
    create(option) {
        return {
            name: option.name || '',
            age: option.age || '' 
        }
    }
}

const joao = Person2.create({name: 'Joao', age: '28'});
console.log(`id:${joao.toString()} joao.name:${joao.name} joao.age:${joao.age}`);

const person2 = Person2.create({name: 'Name2', age: '2'});
console.log(`id:${person2.toString()} person2.name:${person2.name} person2.age:${person2.age}`);

joao.name = 'new name';
joao.age = '99';
console.log(`id:${joao.toString()} joao.name:${joao.name} joao.age:${joao.age}`);

console.log(`id:${person2.toString()} person2.name:${person2.name} person2.age:${person2.age}`);

// const personClone = joao.clone;
// console.log(`id:${personClone.toString()} person2.name:${personClone.name} person2.age:${personClone.age}`);

console.log(joao.__proto__);

