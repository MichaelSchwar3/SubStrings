## Substrings

### Background

Substrings is a word descrambler game intended to keep the mind sharp.

The rules of the game are simple. A player is given 6 jumbled letters and has
two minutes to try and descramble as many words as possible. Each letter may
only be used once per word. Each word is worth a certain amount of points.
If the player is able to guess one of (or possibly the only) 6 letter words,
then the player may move on to the next round. The game ends when the player is unable
to guess the 6 letter word within the given time. Players can also guess 3-5 letter words
to get extra points before moving on to the next round.


### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for game logic,
- `HTML5 and Canvas` for rendering

In addition to the entry file, there will be three scripts involved in this project:

`view.js`: this script will handle the logic for creating and updating the necessary elements and rendering them to the DOM. This will handle the logic for the buttons such as shuffle, enter, clear and last word.

`game.js`: this script will handle the user logic for the leaderboard. This class keeps score, round and username to be saved to the Google Firebase DB

`main.js`: this script will be the entry point for our bundle file. It will also have a few methods hosted on the window in order to allow the user to start a game.

### Code Examples

Within SubStrings there is a lot of DOM Manipulation going on throughout the entire game, however the 2 most complicated portions are getting the event listeners to respond correctly and the creation of the board

#### EventListeners

First it was necessary to instantiate an object that kept track of what letter was in what position. As seen below there was a `setLetters` method that would do this for us.

```javascript
setLetters(){
  for (let i = 0; i < 6; i++) {
    this[`let${i}`] = $(`.let-${i}`);
    let el = this[`let${i}`];
    this.letters[el.html().toLowerCase()] = i;
  }
}
```

The event listener then uses this object to determine what action to do upon keypress


```javascript
listenerFunction(event) {
  if (this.letters[event.key] !== undefined) {
    if (!$(`.let-${this.letters[event.key]}`).hasClass("guessed")) {
      this.soundLetter.currentTime = 0;
      if (this.music) {
        this.soundLetter.play();
      }
      $(`.let-${this.letters[event.key]}`).addClass(`guess-${this.pos} guessed`);
      this.guessPos.unshift(this.letters[event.key]);
      this.pos+=1;
    }
  }else if (event.keyCode === 46 || event.keyCode === 8) {
      this.pos -= 1;
      if (this.pos <= 0) this.pos = 0;
      $(`.let-${this.guessPos[0]}`).removeClass(`guess-${this.pos} guessed`);
      this.guessPos.shift();
  }else if (event.keyCode === 13) {
    this.soundGuess.currentTime = 0;
    if (this.music) {
      this.soundGuess.play();
    }
    this.guess();
    this.guessPos = [];
    this.pos = 0;
  }else if(event.keyCode === 32) {
    this.soundShuffle.currentTime = 0;
    if (this.music) {
      this.soundShuffle.play();
    }
    this.shuffleLetters();
  }else if(event.keyCode === 49){
    this.soundToggle();
  }
}
```

#### Board Creation

The `makeBoard` method, finds the list that is embedded within the `board-container` and appends a new unordered list for each word. Then the method uses jQuery to find this newly created word and append letters in the form of list items with the necessary classes applied

```javascript
makeBoard() {
  const level = Object.values(this.words);
  let currentWord = "";
  $('#board-list').empty();
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

```
