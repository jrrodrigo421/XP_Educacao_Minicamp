function informe(num1, num2, num3) {
  num1 = Number(prompt('Informe o primeiro numero'))
  num2 = Number(prompt('Informe o segundo numero'))
  num3 = Number(prompt('Informe o terceiro numero'))
  media = (num1 + num2 + num3)/3
  alert('A Média é : ' + media)
}
informe()