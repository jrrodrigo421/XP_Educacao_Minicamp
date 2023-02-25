function start() {
  alert(`Calculo do Delta (Δ) de uma função de segundo grau. 
  Sabendo que: a = 2, b = 8 e c = – 24
  
  O valor de delta é dado pela seguinte expressão: Δ = b2 – 4ac, em que a, b e c são coeficientes da equação e Δ é delta.
  
  Tomando o exemplo anterior, na equação 2x2 + 8x – 24 = 0, delta vale:
  
  Δ = b2 – 4ac
  Δ = 82 – 4·2·(– 24)
  Δ = 64 + 192
  Δ = 256
  
  Crie um programa JavaScript que faça esse cálculo, mostrando o cálculo passo a passo e o resultado final, a partir de números informados pelo usuário!`)
}

function calcularDelta() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
  resultadoHTML =  "";
  resultadoHTML += "&Delta; = " + b + "<sup>2</sup> - 4 * " + a + " * " + c + '<br>';
  resultadoHTML += "&Delta; = " + b * b + " - 4 * " + a + " * " + c + '<br>';
  resultadoHTML += "&Delta; = " + b * b + " - " + 4 * a + " * " + c + '<br>';
  resultadoHTML += "&Delta; = " + b * b + " - " + 4 * a * c + '<br>';
  resultadoHTML += "&Delta; = " + parseInt(b * b - 4 * a * c) + '<br>';
  document.getElementById("resultadoDelta").innerHTML = resultadoHTML;
}