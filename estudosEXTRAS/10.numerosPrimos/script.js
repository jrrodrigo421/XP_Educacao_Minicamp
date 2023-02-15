function start() {
  alert('10. Exibir números primos que estão entre o número 0 e o 200. Crie um programa que exiba em uma tabela e destaque todos os números primos que estão entre 0 e 200.')
}

tabelaHTML = "<table><tr><th colspan='50'>Números Primos entre 0 e 200<tr><td>1"
var primosEncontrados = 0
for (dividendo = 2; dividendo <= 200; dividendo++) {
  var ehPrimo = true
  for (divisor = 2; divisor < dividendo; divisor++) {
    if (dividendo % divisor == 0) {
      ehPrimo = false
      tabelaHTML += "<td>" + dividendo
      break
    }
  }
  if (Boolean(ehPrimo)) {
    tabelaHTML += "<td bgcolor='blueviolet>" + dividendo
    primosEncontrados ++
  }
  dividendo % 20 == 0 ? tabelaHTML += "<tr>" : false
}
tabelaHTML += "</table>"
document.write(tabelaHTML)
document.write('Primos encontrados: '+ primosEncontrados + '<br>')


start()