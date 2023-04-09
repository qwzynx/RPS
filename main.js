let score = JSON.parse(localStorage.getItem('score')) || { 
  wins: 0, 
  losses: 0, 
  ties: 0};

updateScore();
totalScoreUpdate();


function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
    computerMove = 'Scissors'
  }
  return computerMove;
}



function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  
  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lost';
    } else if (computerMove === 'Paper') {
      result = 'You won'
    } else if (computerMove === 'Scissors') {
      result = 'Tie'
    }
  } else if (playerMove === 'Paper') {
      if (computerMove === 'Rock') {
      result = 'You won';
    } else if (computerMove === 'Paper') {
      result = 'Tie'
    } else if (computerMove === 'Scissors') {
      result = 'You lost'
    }
  } else if (playerMove === 'Rock') {
      if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You lost'
    } else if (computerMove === 'Scissors') {
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


  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector(".now-score").innerHTML = (`${result}`);
  document.querySelector(".user-move").innerHTML = (`YOU: ${playerMove} CPU: ${computerMove}`);


  updateScore();
  totalScoreUpdate();
}





function updateScore() {
  document.querySelector('.text-score').innerHTML = (`Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
}

function totalScoreUpdate() {
  totalScore = score.wins + score.losses
  document.querySelector('.text-score1').innerHTML = (`Total Score: ${totalScore}`);
}



function reset() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScore();
  totalScoreUpdate();
}
