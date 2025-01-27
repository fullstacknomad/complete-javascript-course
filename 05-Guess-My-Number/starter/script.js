'use strict';
/* document.querySelector('.message').textContent = 'this is a new content 🎊';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';
document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let scoreText = document.querySelector('.score');
let message = document.querySelector('.message');
let number = document.querySelector('.number');
let highScore = 0;
number.textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  let input = Number(guess);
  console.log(input);
  // when no input
  if (!input) {
    message.textContent = 'No input';
  }
  //when guess is greater
  else if (input > secretNumber) {
    if (score > 1) {
      message.textContent = 'Input is greater than the Number 🤪';
      score = score - 1;
      scoreText.textContent = score;
    } else {
      message.textContent = 'You lost the game';
      scoreText.textContent = 0;
    }
  }
  // when guess is smaller
  else if (input < secretNumber) {
    if (score > 1) {
      message.textContent = 'Input is less than the Number 🥬🍂';
      score = score - 1;
      scoreText.textContent = score;
    } else {
      message.textContent = 'You lost the game';
      scoreText.textContent = 0;
    }
  }
  // when guess is correct
  else if (input == secretNumber) {
    message.textContent = '🎊🎊🎊 Yu hooooo!!!! Correct Guess 🎊🎊🎊🎊';
    //number.textContent = secretNumber;
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
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
