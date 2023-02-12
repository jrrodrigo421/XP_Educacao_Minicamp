// function calculoImc(altura, peso) {
//   altura = prompt('Qual sua altura ??')
//   peso = prompt('Qual seu peso')

//   imc = peso / (altura * altura)

//   alert(imc)
  
// }
// // calculoImc()




function calcularIMC() {
  var altura = document.getElementById("altura").value;
  var peso   = document.getElementById("peso").value;
  altura /= 100;
  var imc = (peso / (altura * altura)).toFixed(2);
  document.getElementById("resultadoIMC").innerHTML = "IMC: <strong>" + imc + "</strong>";
}