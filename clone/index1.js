const cloneDeep = require('clone-deep');

const obj = {
    codigo: 1,
    nome: "Jose da Silva",
    endereco: {
        logradouro: "Rua da Roça",
        numero: 100,
        bairro: "Centro"
    },
    contatos: [
        {
            nome: "João",
            telefone: 8599999999,
            cargo: "Secretária"
        },
        {
            nome: "Maria",
            telefone: 85888888888,
            cargo: "Gerente"
        }
    ]
}

let copy = cloneDeep(obj);

console.log(copy);

