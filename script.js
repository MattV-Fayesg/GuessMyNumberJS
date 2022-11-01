'use strict';
// Functions and Variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displaySecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

////////////////////////////////
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('YOU WIN!');
    displayBackgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    displaySecretNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is too low or too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'Too low...' : 'too high');
      score--;
      displayScore(score);
    } else {
      displayMessage('YOU LOSE!');
      displayScore(0);
      displayBackgroundColor('#923');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayScore(score);
  displayBackgroundColor('#eee');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = 0;
  document.querySelector('.number').style.width = '15rem';
  displaySecretNumber('?');
});
