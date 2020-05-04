// ROCK, PAPER, SCISSORS GAME.

const btns = document.querySelectorAll('.btn');
const userItem = document.createElement('p');
const compItem = document.createElement('p');
const winnerDecl = document.createElement('h2');
const replayButton = document.createElement('button');

function playGame(determineWinnerCallback, compChoiceCallback) {

  for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
      usersChoice = event.target.innerHTML.toLowerCase();
      determineWinnerCallback(compChoiceCallback);

      userItem.appendChild(document.createTextNode(`The user chose: ${usersChoice}`));
      // userItem.className += 'selection';
      // compItem.className += 'selection';
      compItem.appendChild(document.createTextNode(`The computer chose: ${compChoiceCallback}`))


      document.querySelector('.computer').appendChild(compItem);
      document.querySelector('.user').appendChild(userItem);
     
    });
  }
}


function getComputerChoice() {
  randomNum = Math.ceil(Math.random() * 3);
  let comp;
  switch (randomNum) {
    case 1:
      comp = 'rock';
      break;
    case 2:
      comp = 'paper';
      break;
    case 3:
      comp = 'scissors';
      break;
  }
  return comp;
}


function determineWinner(compChoiceCallback) {
  let gameResult;
  if (usersChoice === compChoiceCallback) {
    gameResult = 'The game is a draw.';
  } else if (usersChoice === 'rock' && compChoiceCallback === 'scissors') {  gameResult = 'User Wins!';
}   else if (usersChoice === 'scissors' && compChoiceCallback === 'paper') {
    gameResult = 'User Wins!';
  } else if (usersChoice === 'paper' && compChoiceCallback === 'rock') {
    gameResult = 'User Wins!';
  } else {
    gameResult = 'The computer wins!';
  }




  winnerDecl.appendChild(document.createTextNode(`${gameResult}`))
  winnerDecl.className += 'res';
  document.querySelector('.result').appendChild(winnerDecl);

  replayButton.appendChild(document.createTextNode(`Play Again`))
  replayButton.className += "btn";
  document.querySelector('.play-again').appendChild(replayButton);
}

function pageReload () {
  replayButton.addEventListener('click', () => {
    location.reload();
    return false;
  })
}

playGame(determineWinner, getComputerChoice());
pageReload();