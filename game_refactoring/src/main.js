'use strict';
import PopUp from './popup.js';
import * as sound from './sound.js';
import { Reason, GameBuilder } from './game.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
  .withGameDuration(10)
  .withCarrotCount(10)
  .withBugCount(10)
  .build();

game.setGameStopListner((reason) => {
  console.log(reason);
  let message;
  switch (reason) {
    case Reason.cancel:
      message = 'REPLAY❓';
      sound.platAlert();
      break;
    case Reason.win:
      message = 'WIN 👍';
      sound.playWin();
      break;
    case Reason.lose:
      message = 'LOSE 👎';
      sound.playBug();
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.show(message);
});

gameFinishBanner.setClickListner(() => {
  game.start();
});
