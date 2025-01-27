'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let scoreText = document.querySelector('.score');

let number = document.querySelector('.number');
let highScore = 0;
// number.textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  let input = Number(guess);

  // when no input
  if (!input) {
    displayMessage('No input');
  }
  //if guess is wrong
  else if (input !== secretNumber) {
    if (score > 1) {
      displayMessage(input > secretNumber ? '📈 Too High 📈' : '📉 Too Low 📉');
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage('You lost the game');
      scoreText.textContent = 0;
    }
  }
  //if guess is right
  else if (input === secretNumber) {
    displayMessage('🎊🎊🎊 Yu hooooo!!!! Correct Guess 🎊🎊🎊🎊');
    number.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // when guess is not valid
  else {
    console.log('Enter a valid number 🛑🚫⛔');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  scoreText.textContent = score;
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
