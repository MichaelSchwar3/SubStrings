class Game {
  constructor(name) {
    this.round = 0;
    this.score = 0;
    this.name = name;
  }
  addScore(letterCount=0){
    if (letterCount === 0) {
      $('#score-counter').html(`${this.score}`);
    }else {
      this.score = (500*letterCount)+1000 + this.score;
      $('#score-counter').html(`${this.score}`);
    }
  }
  addRound() {
    this.round +=1;
    $('#round-counter').html(`${this.round}`);
  }
  saveScore() {
    firebase.database().ref().child('scores/').push({
    name: this.name,
    score: this.score,
    round: this.round,
  });
  }
}

export default Game;
