function start(){
  alert('7. Encontre os múltiplos de 3 ou 5. Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23. Faça um programa JavaScript que encontre a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.')
  verificaMultiplo()
}

function verificaMultiplo(multiplo) {
  var multiplo3 = 0
  var multiplo5 = 0

  multiplo = Number(prompt('Insira um numero:'))

  for (var i = 0; i < multiplo; i++) {
    // console.log(i)
    multiplo3 += (i % 3 == 0) ? i : 0
    multiplo5 += (i % 5 == 0) ? i : 0
    console.log(multiplo3)
    console.log(multiplo5)
  }
  document.write('<br><br>')
  document.write('Somatórios dos Múltiplos de 3: ' + multiplo3 + '<br>')
  document.write('Somatórios dos Múltiplos de 5: ' + multiplo5 + '<br>')
  document.write('Somatórios dos Múltiplos de 3 e 5: ' + parseInt(multiplo3 + multiplo5))
}
start()