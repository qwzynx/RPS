let score = JSON.parse(localStorage.getItem('score')) || { 
  wins: 0, 
  losses: 0, 
  ties: 0};


function pickComputerMove() {
  const randomNumber = Math.random(); 

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
    computerMove = 'scissors'
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lost';
    } else if (computerMove === 'paper') {
      result = 'You won'
    } else if (computerMove === 'scissors') {
      result = 'Tie'
    }

  } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
      result = 'You won';
    } else if (computerMove === 'paper') {
      result = 'Tie'
    } else if (computerMove === 'scissors') {
      result = 'You lost'
    }
    
  } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lost'
    } else if (computerMove === 'scissors') {
      result = 'You won'
    }
  }

  if (result === 'You won') {
    score.wins += 1;
  } else if (result === 'You lost') {
    score.losses -= 1;
  } else if (result === 'Tie') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score))


  alert(`you picked ${playerMove}, the computer chose ${computerMove} and ${result} 
Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`) 
}

function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  alert(`Reseted: 
Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`)
}
