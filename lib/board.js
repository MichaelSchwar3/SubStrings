class Board {
  constructor($board) {
    this.wordBoard = Board.makeBoard($board);
  }
  makeBoard($board) {
    const level = Object.values(level1);
    let currentWord = "";
    for (let i = 0; i < level.length; i++) {
      $board.append(
        `<li class="word"><ul id="word-${i}"></ul></li>`
      );
      currentWord = level[i].split("");
      for (let j = 0; j < currentWord.length; j++) {
        $(`#word-${i}`).append(
        `<li class="letter"><span class="hidden-letter ${level[i]}">${currentWord[j]}</span></li>`
      );
      }
    }
  }
  revealWord(word) {
    if(words[word.toLowerCase()]){
      $(`.${word}`).removeClass("hidden-letter");
      addScore(word.length);
    }
  }
}
