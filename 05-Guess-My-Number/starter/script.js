'use strict';

const scoreText = document.querySelector('.score');
const number = document.querySelector('.number');
const messageElement = document.querySelector('.message');
const guessInput = document.querySelector('.guess');
const body = document.querySelector('body');
const highScoreText = document.querySelector('.highscore');

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

const displayMessage = message => (messageElement.textContent = message);
const generateSecretNumber = () => Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage('No input');
    return;
  }

  if (guess === secretNumber) {
    displayMessage('🎊🎊🎊 Yu hooooo!!!! Correct Guess 🎊🎊🎊🎊');
    number.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreText.textContent = highScore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High 📈' : '📉 Too Low 📉');
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage('You lost the game');
      scoreText.textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});

const resetGame = () => {
  score = 20;
  secretNumber = generateSecretNumber();
  scoreText.textContent = score;
  number.textContent = '?';
  guessInput.value = '';
  displayMessage('Start guessing...');
  body.style.backgroundColor = '#222';
  number.style.width = '15rem';
};
