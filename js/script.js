{
const playGame = function (playerInput){
  clearMessages();


  const getMoveName = function (argMoveId){
    if (argMoveId == 1) {
      return 'kamień';
    }
    else if (argMoveId == 2) {
      return 'papier';
    }
    else if (argMoveId == 3) {
      return 'nożyce';
    }
  }
  const displayResult = function (argComputerMove, argPlayerMove) {
    console.log('moves:', argComputerMove, argPlayerMove);
    /*printMessage('Komputer zagrał ' + argComputerMove + ', Gracz zagrał ' + argPlayerMove);*/

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Gracz WYGRYWA!');
    }
    else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Gracz WYGRYWA!');
    }
    else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Gracz WYGRYWA!');
    }
    else if (argComputerMove == argPlayerMove) {
      printMessage('remis!');
    }
    else {
      printMessage('Komputer WYGRYWA');
    }
    return ''
  }


  const argComputerMove = getMoveName(Math.floor(Math.random() * 3 + 1));
  console.log('Wylosowana liczba to: ' + argComputerMove);
  


  printMessage('Ruch komputera to: ' + argComputerMove);

  const argPlayerMove = getMoveName(playerInput)

  printMessage('Ruch gracza to: ' + argPlayerMove);
  printMessage(displayResult(argComputerMove, argPlayerMove));
}

document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});
}
