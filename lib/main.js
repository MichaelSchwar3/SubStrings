import {level1, level2, level3} from './dictionary.js';

const shuffle = (word)=>{
    for (let i = word.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [word[i], word[j]] = [word[j], word[i]];
    }
    return word;
};

const formatTime = (seconds) =>{
  let minutes = Math.floor(seconds/60);
  let secs = seconds%60;
  const tmpSec = `0${secs}`;
  const paddedSeconds = tmpSec.slice(tmpSec.length - 2);
  return `${minutes}:${paddedSeconds}`;
};

window.keepTime = ()=>{
  let seconds = 120;
    setInterval(function(){
      if(seconds >-1){
        $('#timer-time').html(`${formatTime(seconds--)}`);
      }
    }, 1000);
};

window.addScore = (letterCount)=>{
  let score = $('#score-counter').html();
  score = (500*letterCount)+1000 + parseInt(score);
  $('#score-counter').html(`${score}`);
  return score;
};

window.game = () =>{

  const level = Object.values(level1).reverse();
  const lastWord = level[0];
  let wordArr = shuffle(lastWord.split(""));
  let pos = 0;
  while(pos<6){
    $(`.let-${pos}`).html(`${wordArr[0]}`);
    wordArr = wordArr.slice(1);
    pos += 1;
  }
};

window.board = () => {
  const level = Object.values(level1);
  let currentWord = "";
  for (let i = 0; i < level.length; i++) {
    $('#board-list').append(
      `<li class="word"><ul id="word-${i}"></ul></li>`
    );
    currentWord = level[i].split("");
    for (let j = 0; j < currentWord.length; j++) {
      $(`#word-${i}`).append(
      `<li class="letter"><span class="hidden-letter ${level[i]}">${currentWord[j]}</span></li>`
    );
    }
  }
};

window.reveal = (word)=> {
  if(words[word.toLowerCase()]){
    $(`.${word}`).removeClass("hidden-letter");
    addScore(word.length);
  }
};

window.clear = (guessPos) =>{
  for (let i = 0; i < guessPos.length; i++) {
    $(`.let-${guessPos[i]}`).removeClass(`guess-${i} guessed`);
  }
};

window.guess = (guessPos) =>{
  const guessArr = guessPos.reverse();
  let guessString = "";
  for (let i = 0; i < guessArr.length; i++) {
    guessString += $(`.let-${guessArr[i]}`).html();
  }
  clear(guessPos);
  reveal(guessString);
};

window.shuffleLetters = () =>{
  let shuffleArr = shuffle([0,1,2,3,4,5]);
  let letters = [];
  let classes = "";
  for (let i = 0; i < shuffleArr.length; i++) {
    letters.push($(`.let-${i}`));
  }
  for (let i = 0; i < letters.length; i++) {
    letters[i].removeClass(`let-${i}`);
    classes = letters[i].attr('class');
    classes = `let-${shuffleArr[i]} ${classes}`;
    letters[i].attr('class', classes);
    // letters[i].addClass(`let-${shuffleArr[i]}`);
  }
};

window.gameOver = () =>{
  if (($('#timer-time').html() === "0")){
    return true;
  }else if(!($(".hidden-letter").length)){
    return true;
  }else {
    return false;
  }
};

window.newGame = () =>{
  board();
  game();
  keepTime();
};

window.enter = () =>{

};

window.last = () =>{

};

document.addEventListener("DOMContentLoaded", ()=> {
  let pos = 0;
  let guessPos = [];
  let score = 0;
  const words = level1;
  window.words = words;
  newGame();


  document.addEventListener('keydown', (event)=>{
    if (event.key === $(`.let-0`).html().toLowerCase()) {
      if (!$(`.let-0`).hasClass("guessed")) {
        $(`.let-0`).addClass(`guess-${pos} guessed`);
        guessPos.unshift(0);
        pos+=1;
      }
    }else if (event.key === $(`.let-1`).html().toLowerCase()) {
      if (!$(`.let-1`).hasClass("guessed")) {
        $(`.let-1`).addClass(`guess-${pos} guessed`);
        guessPos.unshift(1);
        pos+=1;
      }
    }else if (event.key === $(`.let-2`).html().toLowerCase()) {
      if (!$(`.let-2`).hasClass("guessed")) {
      $(`.let-2`).addClass(`guess-${pos} guessed`);
      guessPos.unshift(2);
      pos+=1;
      }
    }else if (event.key === $(`.let-3`).html().toLowerCase()) {
      if (!$(`.let-3`).hasClass("guessed")) {
      $(`.let-3`).addClass(`guess-${pos} guessed`);
      guessPos.unshift(3);
      pos+=1;
      }
    }else if (event.key === $(`.let-4`).html().toLowerCase()) {
      if (!$(`.let-4`).hasClass("guessed")) {
      $(`.let-4`).addClass(`guess-${pos} guessed`);
      guessPos.unshift(4);
      pos+=1;
      }
    }else if (event.key === $(`.let-5`).html().toLowerCase()) {
      if (!$(`.let-5`).hasClass("guessed")) {
      $(`.let-5`).addClass(`guess-${pos} guessed`);
      guessPos.unshift(5);
      pos+=1;
      }
    }else if (event.keyCode === 46 || event.keyCode === 8) {
        pos -= 1;
        if (pos <= 0) pos = 0;
        $(`.let-${guessPos[0]}`).removeClass(`guess-${pos} guessed`);
        guessPos.shift();
    } else if (event.keyCode === 13) {
      guess(guessPos);
      guessPos = [];
      pos = 0;
    }else if(event.keyCode === 32){
      guess(guessPos);
      guessPos = [];
      pos = 0;
      shuffleLetters();
    }else{
        console.log(event.keyCode);
        console.log(event.key);
        console.log($(`.let-${pos}`).innerHTML);
      }
    }
);
$("#twist").on("click", shuffleLetters);


});
