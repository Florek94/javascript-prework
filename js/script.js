function playGame(playerInput){
  clearMessages();


  function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  else if(argMoveId == 2){
    return 'papier';
  }
  else if(argMoveId == 3){
    return 'nożyce';
  }
}
function displayResult(argComputerMove, argPlayerMove){
  console.log('moves:', argComputerMove, argPlayerMove);
  /*printMessage('Komputer zagrał ' + argComputerMove + ', Gracz zagrał ' + argPlayerMove);*/
  
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Gracz WYGRYWA!');
  }
  else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Gracz WYGRYWA!');
  }
  else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Gracz WYGRYWA!');
  }
  else if( argComputerMove == argPlayerMove){
    printMessage('remis!');
  }
  else {
    printMessage('Komputer WYGRYWA');
  }
  return ''
}


let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let argComputerMove = getMoveName(randomNumber);


 printMessage('Ruch komputera to: ' + argComputerMove);
 
 /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

 console.log('Gracz wpisał: ' + playerInput);*/
 
let argPlayerMove = getMoveName(playerInput)

printMessage('Ruch gracza to: ' + argPlayerMove);
printMessage(displayResult(argComputerMove, argPlayerMove));
}

document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

