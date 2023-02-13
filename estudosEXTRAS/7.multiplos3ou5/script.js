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
verificaMultiplo()