// Quando voce deve usar o reduce:

// Quando baseado no array original, voce "reduzir"
// o array a um valor 
// [1,2,3] 6 

// Exemplo 1
// const numbers = [1,2,3]
// const sumResult =numbers.reduce((accumulator, item) => accumulator + item, 0)

// console.log(sumResult);

// Exemplo 2:

const phaScores = [
  { name: 'Rodrigo', score: 337},
  { name: 'Jr', score: 43},
  { name: 'Adriana', score: 234},
  { name: 'Rodriguinho', score: 261},
  { name: 'Gleice', score: 491},
  { name: 'Andre', score: 167},
  { name: 'Larissa', score: 135},
  { name: 'Fael', score: 359},
  { name: 'Neusa', score: 133},
]

const rodrigoScore = phaScores.reduce((accumulator, phaseScore) =>  {
  if (phaseScore.name === 'Rodrigo'){
   return accumulator + phaseScore.score
  }
  return accumulator
}, 0)

console.log(rodrigoScore);
