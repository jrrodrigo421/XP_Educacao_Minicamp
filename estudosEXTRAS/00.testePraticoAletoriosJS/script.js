// Problema do Zelador Eficiente
// O zelador de uma faculdade é extremamente eficiente. Ao final de cada dia, todo o lixo da escola está em sacos plásticos com peso entre 1,01 e 3,00 quilos. Então, todas as sacolas plásticas são levadas para as lixeiras do lado de fora. Uma viagem é descrita como selecionar um número de sacolas que juntas não pesam mais de 3,00 quilos, despejá-las na lixeira externa e retornar à faculdade. Dado o número de sacolas plásticas n e o peso de cada sacola, determine o número mínimo de viagens que o zelador deve fazer.


// Descrição do formato da função solução
// 1) Recebe como parâmetro um vetor com o peso das sacolas a serem levadas.
// 2) Retorne a quantidade de viagens que o zelador deve fazer.


// Exemplos
// Exemplo 1:
// Entrada: pesos = [1.01, 1.99, 2.5, 1.5, 1.01]
// Saída: 3
// Explicação: O zelador consegue levar todas as sacolas plásticas em 3 viagens: [1,01 + 1,99 , 2,5, 1,5 + 1,01].

// Exemplo 2:
// Entrada: pesos = [1.01, 1.01, 1.01, 1.4]
// Saída: 2

// Exemplo 3:
// Entrada: pesos = [1.01, 1.993, 1.32, 1.7, 1.8]
// Saída: 4













function numeroDeViagens(pesos) {
  // Ordena os pesos em ordem crescente
  pesos.sort((a, b) => a - b);
  let numViagens = 0;
  let i = 0;
  let j = pesos.length - 1;
  while (i <= j) {
    if (pesos[i] + pesos[j] <= 3) {
      i++;
    }
    j--;
    numViagens++;
  }
  return numViagens;
}
console.log(numViagens)










// Problema da soma de dois números
// Um vetor com números chamado numeros é dado e pede-se que você encontre os dois elementos desse vetor que somados são iguais ao número objetivo.

// Considere que existe somente uma solução possível e que você não poderá usar o mesmo elemento mais de uma vez.

// Retorne os valores em ordem crescente de indice no vetor.

// Obs.: Números repetidos são considerados elementos diferentes.


// Descrição do formato da função solução
// 1) Recebe como parâmetro um vetor numeros e um número inteiro objetivo
// 2) Retorne um vetor com duas posições cujos valores são os indices do vetor em ordem crescente que fazem a soma objetivo ser possível.


// Exemplos
// Examplo 1:
// Entrada: numeros = [2,7,11,15], objetivo = 9
// Saída: [0,1]

// Examplo 2:
// Entrada: numeros = [3,2,4], objetivo = 6
// Saída: [1,2]

// Examplo 3:
// Entrada: numeros = [3,3], objetivo = 6
// Saída: [0,1]





function main(numeros, objetivo) {
  const dicionario = {};
  for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];
    const complemento = objetivo - num;
    if (complemento in dicionario) {
      return [dicionario[complemento], i];
    }
    dicionario[num] = i;
  }
  return [];
}
console.log(main())








// Possivelmente Palíndromas
// Observe as seguintes strings abaixo:

// "arara"
// "osso"
// "socorram-me, subi no onibus em marrocos"

// Agora leia essas strings de trás para frente. Você pode ler elas independentemente do sentido da leitura!

// Palavras e frases assim são chamadas de palíndromas.

// Agora observe as seguintes strings:
// "parar"
// "temem"
// "technation"

// "parar" e "temem" são chamadas de palavras potencialmente palíndromas
// Isso ocorre porque você pode rearranjar/permutar as letras dessas palavras de forma que elas se tornem palíndromas

// "parar" -> "rapar"
// "temem" -> "metem"

// Enquanto isso, "technation" nunca será uma palavra palíndroma, independentemente de como você reorganizar as letras dela (se duvida de mim, pode tentar!)

// Observações adicionais:
// 1) Não é necessário que as strings sejam palavras que existem na vida real
// 2) Considere a string vazia como potencialmente palíndroma


// Descrição do formato da função solução
// 1) Recebe como parâmetro uma string
// 2) Retorne True, caso a palavra seja potencialmente palíndroma. Retorne False, caso contrário


// Exemplos
// Exemplo 1:
// Entrada: palavra = "abbac"
// Saída: True

// Exemplo 2:
// Entrada: palavra = "abba"
// Saída: True

// Exemplo 3:
// Entrada: palavra = "abbacd"
// Saída: False


function main(palavra) {
  // Conta a frequência de cada caractere
  const freq = {};
  for (const c of palavra) {
    freq[c] = (freq[c] || 0) + 1;
  }

  // Verifica se há no máximo um caractere com frequência ímpar
  let oddFreqCount = 0;
  for (const f of Object.values(freq)) {
    if (f % 2 !== 0) {
      oddFreqCount++;
    }
    if (oddFreqCount > 1) {
      return false;
    }
  }
  return true;
}



// Parênteses Balanceados
// Uma string que consiste em parênteses esquerdo e direito, "(" e ")", é dada e pede-se que você equilibre os parênteses inserindo parênteses conforme necessário. Determine o número mínimo de caracteres que devem ser inseridos.


// Descrição do formato da função solução
// 1) Recebe como parâmetro uma string com parênteses.
// 2) Retorne um número inteiro que deve ser o número mínimo de caracteres a serem adicionados na string.


// Exemplos
// Exemplo 1:
// Entrada: palavra="()))"
// Saída: 2

// Exemplo 2:
// Entrada: palavra="()()"
// Saída: 0

// Exemplo 3:
// Entrada: palavra="())("
// Saída: 2


function main(palavra){
    const pilha = [];
    for (const p of palavra) {
    if (p === '(') {
      pilha.push(p);
    } else if (p === ')') {
      if (pilha.length > 0 && pilha[pilha.length - 1] === '(') {
        pilha.pop();
      } else {
        pilha.push(p);
      }
    }
  }
  return pilha.length;
}