## TextTwist

### Background

TextTwist is a word descrambler game intended to keep the mind sharp.

The rules of the game are simple. A player is given 6 jumbled letters and has
two minutes to try and descramble as many words as possible. Each letter may
only be used once per word. Each word is worth a certain amount of points.
If the player is able to guess one of (or possibly the only) 6 letter words,
then the player may move on to the next round. The game ends when the player is unable
to guess the 6 letter word within the given time.

### Functionality & MVP

User's will be able to have the following functionality within TextTwist:

- [ ] Start and restart the game
- [ ] Guess words correctly/incorrectly
- [ ] Shuffle letters
- [ ] Clear the Board
- [ ] See the last word entered

In addition, this project will include:

- [ ] Leaderboard
- [ ] A production README

### Wireframes

This app will consist of a single screen that has has the score, time and round
displayed across the top. Then across the middle, will be the remaining words to be guessed. Under this will be the guessing area, followed by the letters. Finally on the bottom will be the option buttons (shuffle, enter, clear, last word). Additionally across the left and right sides will be links to Github etc.


### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for game logic,
- `HTML5 and Canvas` for rendering

In addition to the entry file, there will be three scripts involved in this project:

`board.js`: this script will handle the logic for creating and updating the necessary elements and rendering them to the DOM. This will handle the logic for the buttons such as shuffle, enter, clear and last word.

`words.js`: this script will handle the logic behind the scenes. Selecting a 6 letter word from the library of words, finding all words that can be descrambled from the chosen 6 letters and determining if the guessed word was correct//incorrect

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running. Write a basic entry file with the basic game logic written out in JavaScript. Goals for the day:

- Complete game logic
- Review Canvas enough to be able to render a blank board

**Day 2**: Dedicate the day to desigining and finishing the rendering through canvas  Goals for the day:

- Finish words.js logic for obtaining words
- Render a proper board

**Day 3**: Finish up extra effects of canvas and any game logic as necessary  Goals for the day:

- Complete the Javascript coding
- Complete canvas animations


### Bonus features

There are many directions TextTwist could eventually go.  Some anticipated updates are:

- [ ] Allow user to pause game
- [ ] Turn off timer for casual play
- [ ] Add Sound effects
