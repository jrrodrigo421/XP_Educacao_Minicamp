// function start() {
//   alert('Cada novo termo na seqüência de Fibonacci é gerado adicionando os dois termos anteriores. Começando com 0 e 1, os primeiros termos serão: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ( ... ) Considerando os termos da sequência de Fibonacci a partir dos pares 0 e 1, cujos valores não excedam cinquenta mil, encontre a soma dos termos pares.')
// }
// lista = [0,1]
// let x = 0
// let y = 1
// let somatoria = x + y
// lista.push(somatoria)
// console.log(lista)

// for(x = somatoria && y == lista.length-2; lista.length < 50000; somatoria = x +lista[y]) {
//   // x = somatoria
//   // y = lista.length-2
//   // somatoria = x + lista[y]
//   lista.push(somatoria)
  
// }
// console.log(lista)

// x = somatoria
// y = lista.length-2
// somatoria = x + lista[y]
// lista.push(somatoria)
// console.log(lista)
  
  
// x = somatoria
// y = lista.length-2
// somatoria = x + lista[y]
// lista.push(somatoria)
// console.log(lista)
  

// x = somatoria
// y = lista.length-2
// somatoria = x + lista[y]
// lista.push(somatoria)
// console.log(lista)
  

// x = somatoria
// y = lista.length-2
// somatoria = x + lista[y]
// lista.push(somatoria)
// console.log(lista)
  

// x = somatoria
// y = lista.length-2
// somatoria = x + lista[y]
// lista.push(somatoria)
// console.log(lista)
  
// x = somatoria
// y = lista.length-2
// somatoria = x + lista[y]
// lista.push(somatoria)
// console.log(lista)
  

// x = somatoria
// y = lista.length-2
// somatoria = x + lista[y]
// lista.push(somatoria)
// console.log(lista)
  

// x = somatoria
// y = lista.length-2
// somatoria = x + lista[y]
// lista.push(somatoria)
// console.log(lista)
  

var arrSequencia    = [0, 1];
      var sequencia       = 0;
      var numPares        = 0;
      var numImpares      = 0;
      var somaPares       = 0;
      var proximoElemento = 0;
      do {
        sequencia++
        proximoElemento = arrSequencia[sequencia] + arrSequencia[sequencia-1];
        proximoElemento < 50000 ? (
          arrSequencia.push(proximoElemento),
          proximoElemento % 2 == 0 ? 
            ( numPares  ++ , 
              somaPares += proximoElemento )
            : numImpares ++ )
        : false;
        } while  (proximoElemento < 50000);
      document.write("Sequencia de números : " + arrSequencia.join(' / ') + "<br><br>");
      document.write("Quantidade de números pares : " + numPares + "<br>");
      document.write("Quantidade de números impares : " + numImpares + "<br>");
      document.write("Somatórios dos números pares : " + somaPares)


