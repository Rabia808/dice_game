'use strict';
// let savedScore = document.getElementById(`score--${activePlayer}`);
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currScore = 0;
let score = [0, 0];
let activePlayer = 0;
let isPlaying = true;
score0.textContent = '0';
score1.textContent = '0';
diceEl.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
//console.log(diceEl);
rollBtn.addEventListener('click', function () {
  if (isPlaying) {
    let diceNo = Number(Math.trunc(Math.random() * 6) + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceNo}.png`;
    if (diceNo != 1) {
      currScore += diceNo;
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore;
    } else {
      switchPlayer();
    }
  }
});

// hold button action================================================

holdBtn.addEventListener('click', function () {
  if (isPlaying) {
    score[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 50) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      player0.classList.remove('player--active');
      player1.classList.remove('player--active');
      isPlaying = false;
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

// new game reset============================================================

newBtn.addEventListener('click', function () {
  diceEl.classList.add('hidden');

  score0.textContent = 0;
  score1.textContent = 0;
  score[0] = 0;
  score[1] = 0;

  isPlaying = true;
  currScore = 0;
  //   document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  activePlayer = 0;
});
