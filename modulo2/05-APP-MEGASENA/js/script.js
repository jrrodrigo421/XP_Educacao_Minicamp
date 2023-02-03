// teste conexao js
// console.log('teste no console');

// Criando um estado do app :

// var board = [];
// var currentGames = [1, 5, 11, 13, 15, 17];
// var savedGames = [];

// ou:

var state = { board: [], currentGame: [], savedGame: [] };

function start() {
  // Testes das funcoes

  // // console.log('start');
  // addNumberToGame(1);
  // addNumberToGame(2);
  // addNumberToGame(3);
  // addNumberToGame(4);
  // addNumberToGame(7);

  // addNumberToGame(6);
  // // removeNumberFromGrame(4);
  // // removeNumberFromGrame(7);
  // // removeNumberFromGrame(0);
  // saveGame();
  // saveGame();

  // console.log(state.currentGame);
  // console.log(state.savedGame);
  // resetGame();
  // console.log(state.currentGame);

  createBoard();
  newGame();
  console.log(state.board);
}

function createBoard() {
  state.board = [];

  for (var i = 1; i <= 60; i++) {
    state.board.push(i);
  }
}

function newGame() {
  resetGame();
  render();
}

function render() {
  renderBoard();
}

function renderBoard() {
  var divBoard = document.querySelector('#megasena-board');
  divBoard.innerHTML = '';

  var ulNumbers = document.createElement('ul');

  for (var i = 0; i < state.board.length; i++) {
    var currentNumber = state.board[i];

    var liNumber = document.createElement('li');
    liNumber.textContent = currentNumber;
    ulNumbers.appendChild(liNumber);
  }
  divBoard.appendChild(ulNumbers);
}

function addNumberToGame(numberToAdd) {
  if (numberToAdd < 1 || numberToAdd > 60) {
    console.error(
      'Numero invalido. favor inserir numeros de 1 a 60',
      numberToAdd
    );
    return;
  }
  if (state.currentGame.length >= 6) {
    console.error('O jogo ja esta completo');
    return;
  }

  if (isNumberInGame(numberToAdd)) {
    console.error('Este numero ja esta no jogo', numberToAdd);
  }
  state.currentGame.push(numberToAdd);
}

function removeNumberFromGrame(numberToRemove) {
  if (numberToRemove < 1 || numberToRemove > 60) {
    console.error('Numero invalido!', numberToRemove);
    return;
  }

  var newGame = [];
  for (var i = 0; i < state.currentGame.length; i++) {
    var currentNumber = state.currentGame[i];

    if (currentNumber === numberToRemove) {
      continue;
    }

    newGame.push(currentNumber);
  }

  state.currentGame = newGame;
}

function isNumberInGame(numberToCheck) {
  // if (state.currentGame.includes(numberToCheck)) {
  //   return true;
  // }

  // return false;

  return state.currentGame.includes(numberToCheck);
}

function saveGame() {
  if (!isGameComplete()) {
    console.error('O jogo não esta completo!');
    return;
  }
  state.savedGame.push(state.currentGame);
}

function isGameComplete() {
  return state.currentGame.length === 6;
}

function resetGame() {
  state.currentGame = [];
}

start();
