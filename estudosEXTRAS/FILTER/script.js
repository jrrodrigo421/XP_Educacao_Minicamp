// Quado voce deve usar o filter:

// Quando voce precisa obter um novo Array, 
// quantidade de itens menor que a do array original

// [1,2,3] [1,2]


// Exemplo 1
// const randomNumbers = [36,99,37,63]

// const numbersGreaterThan37 = randomNumbers.filter(item => item >37)

// console.log(numbersGreaterThan37);

const users = [
  { name: 'Ada Lovelace', premium: true},
  { name: 'teste', premium: false},
  { name: 'jr', premium: true},
  { name: 'tester', premium: false},
]
const premiumUsers = users.filter(user => user.premium)

console.log(premiumUsers);