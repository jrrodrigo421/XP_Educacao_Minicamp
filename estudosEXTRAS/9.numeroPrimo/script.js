function start() {
  alert('9. Qual é o 1001o número primo? Listando os seis primeiros números primos: 2, 3, 5, 7, 11 e 13, podemos ver que o sexto primo é 13. Qual é o 1001º número primo? Faça um programa JavaScript que apresente esse número para o usuário.')
}
start()

var primosEncontrados = 0
for (dividendo = 2; primosEncontrados < 1001; dividendo++) {
  var ehPrimo = true
  for (divisor = 2; dividendo > divisor; divisor++) {
    if (dividendo % divisor == 0) {
      ehPrimo = false
      break
    }
  }
  if (Boolean(ehPrimo)) {
    primosEncontrados ++
  }
}
document.write('O 1001º numero primo é: ')
document.write(--dividendo + '<br><br>')


