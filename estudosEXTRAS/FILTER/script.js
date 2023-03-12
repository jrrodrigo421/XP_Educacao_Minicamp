// Quado voce deve usar o filter:

// Quando voce precisa obter um novo Array, 
// quantidade de itens menor que a do array original

// [1,2,3] [1,2]


// Exemplo 1
// const randomNumbers = [36,99,37,63]

// const numbersGreaterThan37 = randomNumbers.filter(item => item >37)

// console.log(numbersGreaterThan37);

// Exemplo 2
function isBigEnough(value) {
  return value >= 10
}
const filtered = [12,5,8,130,44].filter(isBigEnough)

// console.log(filtered)


// Exemplo 3 
const users = [
  { name: 'Ada Lovelace', premium: true},
  { name: 'teste', premium: false},
  { name: 'jr', premium: true},
  { name: 'tester', premium: false},
]
const premiumUsers = users.filter(user => user.premium)

// console.log(premiumUsers);

// Exemplo 4 

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function isPrime(num){
  for(let i = 2; num > i; i++){
    if(num % i === 0) {
      return false
    }
  }
  return num > 1
}

// console.log(array.filter(isPrime));

// Exempo 5

const arr = [
  { id: 15},
  { id: -1},
  { id: 0},
  { id: 3},
  { id: 12.2},
  { },
  { id: null},
  { id: NaN},
  { id: "undefined"}
]

let invalidEntries = 0
function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true
  }
  invalidEntries++
  return false
}
const arrByID = arr.filter(filterByID)
console.log("Filtered Array \n", arrByID);

console.log("Number of Invalid Entries = ", invalidEntries);













