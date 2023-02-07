// teste conexao js
// console.log('teste no console');

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

// Criando um estado do app :

// var board = [];
// var currentGames = [1, 5, 11, 13, 15, 17];
// var savedGames = [];

// ou:

var state = { board: [], currentGame: [], savedGame: [] };

function start() {
  readLocalStorage();
  createBoard();
  newGame();
}

function readLocalStorage() {
  if (!window.localStorage) {
    return;
  }

  var savedGamesFromLocalStorage = window.localStorage.getItem('saved-game');

  if (savedGamesFromLocalStorage) {
    state.savedGame = JSON.parse(savedGamesFromLocalStorage);
  }
}

function writeToLocalStorage() {
  window.localStorage.setItem('saved-game', JSON.stringify(state.savedGame));
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

  // console.log(state.currentGame);
}

function render() {
  renderBoard();
  renderButtons();
  renderSavedGames();
}

function renderBoard() {
  var divBoard = document.querySelector('#megasena-board');
  divBoard.innerHTML = '';

  var ulNumbers = document.createElement('ul');
  ulNumbers.classList.add('numbers');

  for (var i = 0; i < state.board.length; i++) {
    var currentNumber = state.board[i];

    var liNumber = document.createElement('li');
    liNumber.textContent = currentNumber;
    liNumber.classList.add('number');

    liNumber.addEventListener('click', handleNumberClick);

    if (isNumberInGame(currentNumber)) {
      liNumber.classList.add('selected-number');
    }

    ulNumbers.appendChild(liNumber);
  }
  divBoard.appendChild(ulNumbers);
}

function handleNumberClick(event) {
  var value = Number(event.currentTarget.textContent);
  // console.log('click');

  if (isNumberInGame(value)) {
    removeNumberFromGrame(value);
  } else {
    addNumberToGame(value);
  }
  // console.log(state.currentGame);
  render();
}

function renderButtons() {
  var divButtons = document.querySelector('#megasena-buttons');
  divButtons.innerHTML = '';
  // divButtons.textContent = 'teste';

  var buttonNewGame = createNewGameButton();
  var buttonRandomGame = createRandomGameButton();
  var buttonSaveGame = createSaveGameButton();

  divButtons.appendChild(buttonNewGame);
  divButtons.appendChild(buttonRandomGame);
  divButtons.appendChild(buttonSaveGame);
}

function createRandomGameButton() {
  var button = document.createElement('button');
  button.textContent = 'Jogo Aleatório';

  button.addEventListener('click', randomGame);

  return button;
}

function createNewGameButton() {
  var button = document.createElement('button');
  button.textContent = 'Novo Jogo';

  button.addEventListener('click', newGame);

  return button;
}

function createSaveGameButton() {
  var button = document.createElement('button');
  button.textContent = 'Salvar Jogo';
  button.disabled = !isGameComplete();

  button.addEventListener('click', saveGame);

  return button;
}

function renderSavedGames() {
  var divSabedGames = document.querySelector('#megasena-saved-games');
  divSabedGames.innerHTML = '';

  if (state.savedGame.length === 0) {
    divSabedGames.innerHTML = '<p>Nenhum jogo salvo</p>';
  } else {
    var ulsavedGames = document.createElement('ul');

    for (var i = 0; i < state.savedGame.length; i++) {
      var currentGame = state.savedGame[i];

      var liGame = document.createElement('li');
      liGame.textContent = currentGame.join(', ');

      ulsavedGames.appendChild(liGame);
    }

    divSabedGames.appendChild(ulsavedGames);
  }
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
  writeToLocalStorage();
  newGame();

  // console.log(state.savedGame);
}

function isGameComplete() {
  return state.currentGame.length === 6;
}

function resetGame() {
  state.currentGame = [];
}

function randomGame() {
  resetGame();

  // console.log(Math.random());

  while (!isGameComplete()) {
    var randomNumber = Math.ceil(Math.random() * 60);
    addNumberToGame(randomNumber);
  }
  // console.log(state.currentGame);
  render();
}
start();
