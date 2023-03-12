/*
Quando voce deve usar o map:

Quando voce precisa obter um novo array, com mesma
quantidade de itens
[1,2,3] [2,4,6]
*/



// Exemplo 1

// const numbers = [1,2,3]

// const doubleNumbers = numbers.map(item =>{
//   return item *2 
// })

// console.log(doubleNumbers);


// Exemplo 2

// const prices = [20, 10, 15, 25, 32, 5, 85]

// const salePrices = prices.map(price => price / 2)
// console.log(salePrices);

// Exempo 3 
const products = [
  { name: 'Mouse sem Frio', price:30 },
  { name:'Pen Drive', price: 25},
  { name:'Cartucho de Tinta', price: 50},
  { name:'Suporte', price: 23},
  { name:'Repetidor', price: 44},
]

const saleProducts = products.map(product => {
  if (product.price >= 30) {
    return {
      name: product.name,
      price: product.price / 2
    }
  }
  return product
})
console.log(products, saleProducts);