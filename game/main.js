'use strict';

const CARROT_SIZE = 80;
// const CARROT_COUNT = 10;
// const BUG_COUNT = 10;
const GAME_DURATION_SEC = 10;

const difficultySelect = document.getElementById('difficulty-select');
const field = document.querySelector('.bottom_container');
const fieldRect = field.getBoundingClientRect();
const gameBtn = document.querySelector('.btn_Start');
const gameTimer = document.querySelector('.timer');
const gameScore = document.querySelector('.score');

const popUp = document.querySelector('.pop-up');
const popUpText = document.querySelector('.message');
const popUpRefresh = document.querySelector('.restart');

const carrotSound = new Audio('./sound/carrot_pull.mp3');
const bugSound = new Audio('./sound/bug_pull.mp3');
const winSound = new Audio('./sound/game_win/mp3');
const bgSound = new Audio('./sound/bg.mp3');
const alertSound = new Audio('./sound/alert.wav');

let started = false;
let score = 0;
let timer = undefined;
let CARROT_COUNT;
let BUG_COUNT;
field.addEventListener('click', onFieldClick);

gameBtn.addEventListener('click', () => {
  const selectedDifficulty = difficultySelect.value;

  if (selectedDifficulty === 'easy') {
    CARROT_COUNT = 5;
    BUG_COUNT = 5;
  } else if (selectedDifficulty === 'medium') {
    CARROT_COUNT = 10;
    BUG_COUNT = 10;
  } else if (selectedDifficulty === 'hard') {
    CARROT_COUNT = 15;
    BUG_COUNT = 15;
  }

  if (started) {
    stopGame();
  } else {
    startGame();
  }
});
popUpRefresh.addEventListener('click', () => {
  hidePopup();
  const selectedDifficulty = difficultySelect.value;
  if (selectedDifficulty === 'easy') {
    CARROT_COUNT = 5;
    BUG_COUNT = 5;
  } else if (selectedDifficulty === 'medium') {
    CARROT_COUNT = 10;
    BUG_COUNT = 10;
  } else if (selectedDifficulty === 'hard') {
    CARROT_COUNT = 15;
    BUG_COUNT = 15;
  }
  hideDifficultySelect();
  startGame();
});

function startGame() {
  started = true;
  hideDifficultySelect();
  initGame();
  showStopBtn();
  showTimerAndScore();
  startGameTimer();
  playSound(bgSound);
}

function stopGame() {
  started = false;
  showDifficultySelect();
  stopGameTimer();
  hideGameBtn();
  showPopup('REPLAY❓');
  stopSound(bgSound);
  playSound(alertSound);
}

function finishGame(win) {
  started = false;
  showDifficultySelect();
  hideGameBtn();
  if (win) {
    playSound(winSound);
  } else {
    playSound(alertSound);
  }
  stopGameTimer();
  stopSound(bgSound);
  showPopup(win ? 'YOU WIN!👍' : 'YOU LOSE!👎');
}

function showStopBtn() {
  const icon = gameBtn.querySelector('.fas');
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
  gameBtn.style.visibility = 'visible';
}

function hideGameBtn() {
  gameBtn.style.visibility = 'hidden';
}

function showTimerAndScore() {
  gameTimer.style.visibility = 'visible';
  gameScore.style.visibility = 'visible';
}

function startGameTimer() {
  let remainTime = GAME_DURATION_SEC;
  updateTimerText(remainTime);
  timer = setInterval(() => {
    if (remainTime <= 0) {
      clearInterval(timer);
      finishGame(score === CARROT_COUNT);
      //updateTimerText(0);
      return;
    }
    updateTimerText(--remainTime);
  }, 1000);
}

function stopGameTimer() {
  clearInterval(timer);
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}

function showPopup(text) {
  popUpText.innerText = text;
  popUp.classList.remove('pop-up--hide');
  stopSound(bgSound);
}

function hidePopup() {
  popUp.classList.add('pop-up--hide');
}

function initGame() {
  // console.log(fieldRect);
  score = 0;
  field.innerHTML = '';
  gameScore.innerText = CARROT_COUNT;
  addItem('carrot', CARROT_COUNT, 'img/carrot.png');
  addItem('bug', BUG_COUNT, 'img/bug.png');
}

function onFieldClick(evevt) {
  if (!started) {
    return;
  }
  const target = evevt.target;
  if (target.matches('.carrot')) {
    target.remove();
    score++;
    playSound(carrotSound);
    updateScore();
    if (score === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (target.matches('.bug')) {
    finishGame(false);
    playSound(bugSound);
  }
}
function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}
function stopSound(sound) {
  sound.pause();
}
function updateScore() {
  gameScore.innerText = CARROT_COUNT - score;
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const x2 = fieldRect.width - CARROT_SIZE;
  const y1 = 0;
  const y2 = fieldRect.height - CARROT_SIZE;

  for (let i = 0; i < count; i++) {
    const item = document.createElement('img');
    item.setAttribute('class', className);
    item.setAttribute('src', imgPath);
    item.style.position = 'absolute';

    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);

    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function hideDifficultySelect() {
  difficultySelect.style.display = 'none';
  document.querySelector('label[for="difficulty-select"]').style.display =
    'none';
}

function showDifficultySelect() {
  difficultySelect.style.display = 'block';
  document.querySelector('label[for="difficulty-select"]').style.display =
    'block';
}
