import uuid from "uuid";

function createNegociacao() {
    const negociacao = {
        id: new Date().getTime(), 
        comprador: new String(''),
        vendedor: '',
        preco: 0.0,
        data: new Date(),
        print: function() {
            console.log(this);
        }
    };
    //Object.freeze(negociacao);

    return negociacao;
}

const negociacao1 = createNegociacao();

negociacao1.comprador = 1000;
negociacao1.vendedor = 2000;
negociacao1.preco = 10.50;
negociacao1.print();

console.log(negociacao1);

const negociacao2 = createNegociacao();

negociacao2.comprador = 1001;
negociacao2.vendedor = 2001;
negociacao2.preco = 10.51;
negociacao2.print();

console.log(negociacao2);

console.log(negociacao1 == negociacao2);