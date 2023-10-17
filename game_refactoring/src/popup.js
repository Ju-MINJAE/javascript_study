'use strict';

export default class PopUp {
  constructor() {
    this.popUp = document.querySelector('.pop-up');
    this.popUpText = document.querySelector('.message');
    this.popUpRefresh = document.querySelector('.restart');

    this.popUpRefresh.addEventListener('click', () => {
      this.onClick && this.onClick();
      this.hide();
    });
  }

  setClickListner(onClick) {
    this.onClick = onClick;
  }

  show(text) {
    this.popUpText.innerText = text;
    this.popUp.classList.remove('pop-up--hide');
  }

  hide() {
    this.popUp.classList.add('pop-up--hide');
  }

  playSound(sound) {
    sound.currentTime = 0;
    sound.play();
  }
}
