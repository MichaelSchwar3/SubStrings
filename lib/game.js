import {isWord} from "./words.js";

class Game {
  constructor(level) {
    this.timer = 120;
    this.round = 1;
    this.level = level;
    this.remainingWords = Object.keys(level).length;
  }
  guessWord(word){
    if (isWord(word, this.level)){
      this.revealWord(word);
      this.remainingWords -=1;
      delete this.level[word];
    }
  }
  gameOver(){
    if (this.timer === 0){
      return true;
    }else if(this.remainingWords <1){
      return true;
    }else {
      return false;
    }
  }
  startGame(){
    const level = Object.values(this.level).reverse();
    const lastWord = level[0];
    let wordArr = shuffle(lastWord.split(""));
    let pos = 0;
    while(pos<6){
      $(`.let-${pos}`).html(`${wordArr[0]}`);
      wordArr = wordArr.slice(1);
      pos += 1;
    }
  }

}
