import {level1, level2, level3} from './dictionary.js';

class Game {
  constructor(score, timer) {
    this.round = 0;
    this.score = 0;
    this.name = "";
  }
  addScore(letterCount){
    this.score = (500*letterCount)+1000 + this.score;
    $('#score-counter').html(`${this.score}`);
  }
}

export default Game;
