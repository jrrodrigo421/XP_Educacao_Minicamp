const calculateButton = document.querySelector('#calculate-button');

calculateButton.addEventListener('click', function () {
  const num1 = Number(document.querySelector('#num1').value);
  const num2 = Number(document.querySelector('#num2').value);

  document.querySelector('#addition').textContent = ` ${num1 + num2}`;
  document.querySelector('#subtractionAB').textContent = `${num1 - num2}`;
  document.querySelector('#subtractionBA').textContent = `${num2 - num1}`;
  document.querySelector('#multiplication').textContent = `${num1 * num2}`;
  document.querySelector('#divisionAB').textContent = `${
    num2 !== 0
      ? (num1 / num2).toFixed(2)
      : alert('Não é possível dividir por zero')
  }`;
  document.querySelector('#divisionBA').textContent = `${
    num1 !== 0 ? (num2 / num1).toFixed(2) : 'Não é possível dividir por zero'
  }`;
  document.querySelector('#powerAB').textContent = `${Math.pow(num1, num2)}`;
  document.querySelector('#powerBA').textContent = `${Math.pow(num2, num1)}`;
  document.querySelector('#square-rootA').textContent = `${Math.sqrt(
    num1
  ).toFixed(2)}`;
  document.querySelector('#square-rootB').textContent = `${Math.sqrt(
    num2
  ).toFixed(2)}`;
  document.querySelector('#factorialA').textContent = `${factorial(num1)}`;
  document.querySelector('#factorialB').textContent = `${factorial(num2)}`;
  document.querySelector('#percentageAB').textContent = `${
    (num1 / num2) * 100
  }%`;
  document.querySelector('#percentageBA').textContent = `${Math.ceil(
    (num2 / num1) * 100
  )}%`;

  document.querySelector('#average').textContent = `${(num1 + num2) / 2}`;
  document.getElementById('addition').style.color = 'white';
  document.getElementById('subtractionAB').style.color = 'white';
  document.getElementById('subtractionBA').style.color = 'white';
  document.getElementById('multiplication').style.color = 'white';
  document.getElementById('divisionAB').style.color = 'white';
  document.getElementById('divisionBA').style.color = 'white';
  document.getElementById('powerAB').style.color = 'white';
  document.getElementById('powerBA').style.color = 'white';
  document.getElementById('square-rootA').style.color = 'white';
  document.getElementById('square-rootB').style.color = 'white';
  document.getElementById('factorialA').style.color = 'white';
  document.getElementById('factorialB').style.color = 'white';
  document.getElementById('percentageAB').style.color = 'white';
  document.getElementById('percentageBA').style.color = 'white';
  document.getElementById('average').style.color = 'white';
});

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
