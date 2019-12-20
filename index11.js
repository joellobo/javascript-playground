const setPrice = product => {
    product.price = 73
};

const product = { name: 'Instant Kung Foo.' };

setPrice(product);

console.log(product.price == 73) // true





const setPrice = product => {
    return { ...product, price: 73 }
}
const product = { name: 'Instant Kung Foo.' }
const newProduct = setPrice(product)

console.log(product.price == 73) // false
console.log(newProduct.price == 73) // true