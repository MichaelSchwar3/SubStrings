/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/dictionary.js":
/*!***************************!*\
  !*** ./lib/dictionary.js ***!
  \***************************/
/*! exports provided: level1, level2, level3, level4, level5, level6, level7, level8, level9, level10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level1\", function() { return level1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level2\", function() { return level2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level3\", function() { return level3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level4\", function() { return level4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level5\", function() { return level5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level6\", function() { return level6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level7\", function() { return level7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level8\", function() { return level8; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level9\", function() { return level9; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level10\", function() { return level10; });\nconst level1 = {\n  ads: \"ADS\",\n  age: \"AGE\",\n  ash: \"ASH\",\n  gad: \"GAD\",\n  gas: \"GAS\",\n  had: \"HAD\",\n  hag: \"HAG\",\n  has: \"HAS\",\n  sad: \"SAD\",\n  sag: \"SAG\",\n  sea: \"SEA\",\n  she: \"SHE\",\n  aged: \"AGED\",\n  ages: \"AGES\",\n  dash: \"DASH\",\n  gads: \"GADS\",\n  gash: \"GASH\",\n  hags: \"HAGS\",\n  head: \"HEAD\",\n  shad: \"SHAD\",\n  shag: \"SHAG\",\n  shed: \"SHED\",\n  ashed: \"ASHED\",\n  heads: \"HEADS\",\n  shade: \"SHADE\",\n  gashed: \"GASHED\"\n};\n\nconst level2 = {\n  ins: \"INS\",\n  its: \"ITS\",\n  nit: \"NIT\",\n  nut: \"NUT\",\n  sin: \"SIN\",\n  sit: \"SIT\",\n  sun: \"SUN\",\n  tin: \"TIN\",\n  tun: \"TUN\",\n  nits: \"NITS\",\n  nuts: \"NUTS\",\n  quit: \"QUIT\",\n  snit: \"SNIT\",\n  stun: \"STUN\",\n  suit: \"SUIT\",\n  tins: \"TINS\",\n  tuns: \"TUNS\",\n  unit: \"UNIT\",\n  quits: \"QUITS\",\n  units: \"UNITS\",\n  squint: \"SQUINT\"\n};\n\nconst level3 = {\n  are: \"ARE\",\n  ark: \"ARK\",\n  ear: \"EAR\",\n  era: \"ERA\",\n  hen: \"HEN\",\n  her: \"HER\",\n  ken: \"KEN\",\n  rah: \"RAH\",\n  ran: \"RAN\",\n  ankh: \"ANKH\",\n  earn: \"EARN\",\n  hank: \"HANK\",\n  hare: \"HARE\",\n  hark: \"HARK\",\n  hear: \"HEAR\",\n  khan: \"KHAN\",\n  near: \"NEAR\",\n  rake: \"RAKE\",\n  rank: \"RANK\",\n  rhea: \"RHEA\",\n  hanker: \"HANKER\"\n};\n\nconst level4 = {\n  bet: \"BET\",\n  bur: \"BUR\",\n  but: \"BUT\",\n  let: \"LET\",\n  ret: \"RET\",\n  rub: \"RUB\",\n  rue: \"RUE\",\n  rut: \"RUT\",\n  tub: \"TUB\",\n  belt: \"BELT\",\n  blue: \"BLUE\",\n  blur: \"BLUR\",\n  burl: \"BURL\",\n  lube: \"LUBE\",\n  lure: \"LURE\",\n  lute: \"LUTE\",\n  rube: \"RUBE\",\n  rule: \"RULE\",\n  true: \"TRUE\",\n  tube: \"TUBE\",\n  bluer: \"BLUER\",\n  blurt: \"BLURT\",\n  brute: \"BRUTE\",\n  rebut: \"REBUT\",\n  tuber: \"TUBER\",\n  butler: \"BUTLER\"\n};\n\nconst level5 = {\n  cel: \"CEL\",\n  cod: \"COD\",\n  cow: \"COW\",\n  dew: \"DEW\",\n  doe: \"DOE\",\n  led: \"LED\",\n  low: \"LOW\",\n  ode: \"ODE\",\n  old: \"OLD\",\n  owe: \"OWE\",\n  owl: \"OWL\",\n  wed: \"WED\",\n  woe: \"WOE\",\n  clod: \"CLOD\",\n  code: \"CODE\",\n  coed: \"COED\",\n  cold: \"COLD\",\n  cowl: \"COWL\",\n  dole: \"DOLE\",\n  lewd: \"LEWD\",\n  lode: \"LODE\",\n  owed: \"OWED\",\n  weld: \"WELD\",\n  cowed: \"COWED\",\n  dowel: \"DOWEL\",\n  lowed: \"LOWED\",\n  cowled: \"COWLED\"\n};\n\nconst level6 = {\n  cot: \"COT\",\n  ore: \"ORE\",\n  ort: \"ORT\",\n  rec: \"REC\",\n  ret: \"RET\",\n  rev: \"REV\",\n  roc: \"ROC\",\n  roe: \"ROE\",\n  rot: \"ROT\",\n  toe: \"TOE\",\n  vet: \"VET\",\n  core: \"CORE\",\n  cove: \"COVE\",\n  over: \"OVER\",\n  rote: \"ROTE\",\n  rove: \"ROVE\",\n  tore: \"TORE\",\n  vert: \"VERT\",\n  veto: \"VETO\",\n  vote: \"VOTE\",\n  cover: \"COVER\",\n  covet: \"COVET\",\n  overt: \"OVERT\",\n  trove: \"TROVE\",\n  voter: \"VOTER\",\n  covert: \"COVERT\"\n};\n\nconst level7 = {\n  any: \"ANY\",\n  gap: \"GAP\",\n  gay: \"GAY\",\n  gin: \"GIN\",\n  gyp: \"GYP\",\n  nag: \"NAG\",\n  nap: \"NAP\",\n  nay: \"NAY\",\n  nip: \"NIP\",\n  pan: \"PAN\",\n  pay: \"PAY\",\n  pig: \"PIG\",\n  pin: \"PIN\",\n  yap: \"YAP\",\n  yip: \"YIP\",\n  gain: \"GAIN\",\n  pain: \"PAIN\",\n  pang: \"PANG\",\n  ping: \"PING\",\n  yang: \"YANG\",\n  aping: \"APING\",\n  paying: \"PAYING\"\n};\n\nconst level8 = {\n  bur: \"BUR\",\n  buy: \"BUY\",\n  bye: \"BYE\",\n  per: \"PER\",\n  pry: \"PRY\",\n  pub: \"PUB\",\n  rep: \"REP\",\n  rub: \"RUB\",\n  rue: \"RUE\",\n  rye: \"RYE\",\n  yup: \"YUP\",\n  burp: \"BURP\",\n  bury: \"BURY\",\n  prey: \"PREY\",\n  pure: \"PURE\",\n  pyre: \"PYRE\",\n  rube: \"RUBE\",\n  ruby: \"RUBY\",\n  buyer: \"BUYER\",\n  prebuy: \"PREBUY\"\n};\n\nconst level9 = {\n  and: \"AND\",\n  ape: \"APE\",\n  axe: \"AXE\",\n  den: \"DEN\",\n  end: \"END\",\n  nap: \"NAP\",\n  pad: \"PAD\",\n  pan: \"PAN\",\n  pea: \"PEA\",\n  pen: \"PEN\",\n  aped: \"APED\",\n  apex: \"APEX\",\n  axed: \"AXED\",\n  dean: \"DEAN\",\n  nape: \"NAPE\",\n  neap: \"NEAP\",\n  pane: \"PANE\",\n  pend: \"PEND\",\n  paned: \"PANED\",\n  expand: \"EXPAND\"\n};\n\nconst level10 = {\n  hen: \"HEN\",\n  her: \"HER\",\n  hew: \"HEW\",\n  hie: \"HIE\",\n  ire: \"IRE\",\n  new: \"NEW\",\n  wen: \"WEN\",\n  win: \"WIN\",\n  heir: \"HEIR\",\n  hire: \"HIRE\",\n  rein: \"REIN\",\n  weir: \"WEIR\",\n  when: \"WHEN\",\n  whir: \"WHIR\",\n  wine: \"WINE\",\n  wire: \"WIRE\",\n  wren: \"WREN\",\n  whine: \"WHINE\",\n  whiner: \"WHINER\"\n};\n\n\n//# sourceURL=webpack:///./lib/dictionary.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor(name) {\n    this.round = 0;\n    this.score = 0;\n    this.name = name;\n  }\n  addScore(letterCount=0){\n    if (letterCount === 0) {\n      $('#score-counter').html(`${this.score}`);\n    }else {\n      this.score = (500*letterCount)+1000 + this.score;\n      $('#score-counter').html(`${this.score}`);\n    }\n  }\n  addRound() {\n    this.round +=1;\n    $('#round-counter').html(`${this.round}`);\n  }\n  saveScore() {\n    firebase.database().ref().child('scores/').push({\n    name: this.name,\n    score: this.score,\n    round: this.round,\n  });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ \"./lib/view.js\");\n/* harmony import */ var _dictionary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dictionary.js */ \"./lib/dictionary.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=> {\n  let view;\n  let levels = [_dictionary_js__WEBPACK_IMPORTED_MODULE_1__[\"level1\"],_dictionary_js__WEBPACK_IMPORTED_MODULE_1__[\"level2\"],_dictionary_js__WEBPACK_IMPORTED_MODULE_1__[\"level3\"],_dictionary_js__WEBPACK_IMPORTED_MODULE_1__[\"level4\"],_dictionary_js__WEBPACK_IMPORTED_MODULE_1__[\"level5\"],_dictionary_js__WEBPACK_IMPORTED_MODULE_1__[\"level6\"],_dictionary_js__WEBPACK_IMPORTED_MODULE_1__[\"level7\"],_dictionary_js__WEBPACK_IMPORTED_MODULE_1__[\"level8\"],_dictionary_js__WEBPACK_IMPORTED_MODULE_1__[\"level9\"],_dictionary_js__WEBPACK_IMPORTED_MODULE_1__[\"level10\"]];\n  window.startGame = ()=>{\n    if ($('input').val() !== \"\") {\n      view = new _view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](levels, $('input').val());\n      $(document).off(\"keypress\", startGameEnter);\n      $('.new-game').empty();\n    }\n  };\n  window.endOfRound = ()=>{\n    view.endOfRound();\n    $('.new-game').empty();\n  };\n  window.startGameEnter = (e)=>{\n    if (e.which == 13) {\n      startGame();\n    }\n  };\n  $('#board-container').append(\n    `<li class=\"new-game\"><button id=\"new-game-button\" onClick=\"startGame()\">Play Game\n    </button> <input id=\"username\" autocomplete=\"off\" placeholder=\"Name\" type=\"text\"></input></li>`\n  );\n  $('#username').focus();\n  $(document).on(\"keypress\", startGameEnter);\n});\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! exports provided: shuffle, formatTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return shuffle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatTime\", function() { return formatTime; });\nconst shuffle = (word)=>{\n    for (let i = word.length - 1; i > 0; i--) {\n        const j = Math.floor(Math.random() * (i + 1));\n        [word[i], word[j]] = [word[j], word[i]];\n    }\n    return word;\n};\n\nconst formatTime = (seconds) =>{\n  let minutes = Math.floor(seconds/60);\n  let secs = seconds%60;\n  const tmpSec = `0${secs}`;\n  const paddedSeconds = tmpSec.slice(tmpSec.length - 2);\n  return `${minutes}:${paddedSeconds}`;\n};\n\n\n//# sourceURL=webpack:///./lib/util.js?");

/***/ }),

/***/ "./lib/view.js":
/*!*********************!*\
  !*** ./lib/view.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\n\n\n\nclass View {\n  constructor(levels, name) {\n    this.playGame(levels, name);\n  }\n  playGame(levels, name) {\n    this.addListeners = this.addListeners.bind(this);\n    this.newRound = this.newRound.bind(this);\n    this.setLetters = this.setLetters.bind(this);\n    this.endOfRound = this.endOfRound.bind(this);\n    this.gameOver = this.gameOver.bind(this);\n    this.keepTime = this.keepTime.bind(this);\n    this.listenerFunction = this.listenerFunction.bind(this);\n    this.clear = this.clear.bind(this);\n    this.setWords = this.setWords.bind(this);\n    this.soundToggle = this.soundToggle.bind(this);\n    this.shuffleLetters = this.shuffleLetters.bind(this);\n    this.shuffleGuess = this.shuffleGuess.bind(this);\n    this.nextRound = false;\n    this.music = true;\n    (new Audio()).canPlayType(\"audio/ogg; codecs=vorbis\");\n    this.soundLetter = new Audio(\"./sounds/bubble.wav\");\n    this.soundShuffle = new Audio(\"./sounds/swoosh.wav\");\n    this.soundGuess = new Audio(\"./sounds/thump.wav\");\n    this.soundRightGuess = new Audio(\"./sounds/ding.wav\");\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\n    this.game.addScore();\n    this.game.addRound();\n    this.levelOrder(levels);\n    this.levelCounter = 0;\n    this.setWords();\n    this.board = $('#board-list');\n    this.pos = 0;\n    this.guessPos = [];\n    this.words = this.levels[this.levelCounter];\n    this.remainingWords = this.words.length;\n    this.board = this.makeBoard();\n    this.setLetters();\n  }\n  levelOrder(levels) {\n    let newLevels = levels;\n    this.levels = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"shuffle\"])(newLevels);\n  }\n  setWords() {\n    this.words = this.levels[this.levelCounter];\n    this.guessedWords = {};\n  }\n  setLetters(){\n    this.let0 = $(`.let-0`);\n    this.let1 = $(`.let-1`);\n    this.let2 = $(`.let-2`);\n    this.let3 = $(`.let-3`);\n    this.let4 = $(`.let-4`);\n    this.let5 = $(`.let-5`);\n    this.letters = {\n      [this.let0.html().toLowerCase()] : 0,\n      [this.let1.html().toLowerCase()] : 1,\n      [this.let2.html().toLowerCase()] : 2,\n      [this.let3.html().toLowerCase()] : 3,\n      [this.let4.html().toLowerCase()] : 4,\n      [this.let5.html().toLowerCase()] : 5,\n    };\n  }\n  newRound() {\n    const currentLevel = Object.values(this.words).reverse();\n    this.lastWord = currentLevel[0];\n    let wordArr = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"shuffle\"])(this.lastWord.split(\"\"));\n    let pos = 0;\n    while(pos<6){\n      $(`.let-${pos}`).html(`${wordArr[0]}`);\n      wordArr = wordArr.slice(1);\n      pos += 1;\n    }\n    this.keepTime();\n  }\n  makeBoard() {\n    const level = Object.values(this.words);\n    let currentWord = \"\";\n    $('#board-list').empty();\n    for (let i = 0; i < level.length; i++) {\n      $('#board-list').append(\n        `<li class=\"word\"><ul id=\"word-${i}\"></ul></li>`\n      );\n      currentWord = level[i].split(\"\");\n      for (let j = 0; j < currentWord.length; j++) {\n        $(`#word-${i}`).append(\n        `<li class=\"letter\"><span class=\"hidden-letter ${level[i]}\">${currentWord[j]}</span></li>`\n      );\n      }\n    }\n    this.newRound();\n    this.addListeners();\n  }\n  keepTime() {\n    this.timer = 90;\n    let timer = setInterval(()=>{\n        if(this.timer >-1){\n          $('#timer-time').html(`${Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"formatTime\"])(this.timer--)}`);\n          this.timer = this.timer;\n        }else if (this.timer === -1) {\n          this.guess();\n          this.guessPos = [];\n          this.pos = 0;\n          this.gameOver();\n          this.timer = 10;\n          clearInterval(timer);\n\n        }else {\n          clearInterval(timer);\n        }\n      }, 1000);\n  }\n  guess() {\n    const guessArr = this.guessPos.reverse();\n    let guessString = \"\";\n    for (let i = 0; i < guessArr.length; i++) {\n      guessString += $(`.let-${guessArr[i]}`).html();\n    }\n    this.clear();\n    this.revealWord(guessString);\n  }\n  revealWord(word) {\n    if(this.words[word.toLowerCase()]){\n      $(`.${word}`).removeClass(\"hidden-letter\");\n      if (!this.guessedWords[word]) {\n        if (this.music) {\n          this.soundRightGuessTwo.play();\n        }\n        this.game.addScore(word.length);\n      }else {\n        if (this.music) {\n          this.soundGuess.play();\n        }\n      }\n      this.guessedWords[word] = true;\n      this.remainingWords--;\n      if (word === this.lastWord) {\n        this.nextRound = true;\n      }\n    }else {\n      if (this.music) {\n        this.soundGuess.play();\n      }\n    }\n  }\n  shuffleGuess(){\n    const guessArr = this.guessPos.reverse();\n    let guessString = \"\";\n    for (let i = 0; i < guessArr.length; i++) {\n      guessString += $(`.let-${guessArr[i]}`).html();\n    }\n    this.clear();\n  }\n  shuffleLetters() {\n    this.shuffleGuess();\n    this.guessPos = [];\n    this.pos = 0;\n    let shuffleArr = Object(_util_js__WEBPACK_IMPORTED_MODULE_0__[\"shuffle\"])([0,1,2,3,4,5]);\n    let letters = [];\n    let classes = \"\";\n    for (let i = 0; i < shuffleArr.length; i++) {\n      letters.push($(`.let-${i}`));\n    }\n    for (let i = 0; i < letters.length; i++) {\n      letters[i].removeClass(`let-${i}`);\n      classes = letters[i].attr('class');\n      classes = `let-${shuffleArr[i]} ${classes}`;\n      letters[i].attr('class', classes);\n    }\n    this.setLetters();\n  }\n  clear() {\n    for (let i = 0; i < this.guessPos.length; i++) {\n      $(`.let-${this.guessPos[i]}`).removeClass(`guess-${i} guessed`);\n    }\n  }\n  listenerFunction(event) {\n    if (this.letters[event.key] !== undefined) {\n      if (!$(`.let-${this.letters[event.key]}`).hasClass(\"guessed\")) {\n        this.soundLetter.currentTime = 0;\n        if (this.music) {\n          this.soundLetter.play();\n        }\n        $(`.let-${this.letters[event.key]}`).addClass(`guess-${this.pos} guessed`);\n        this.guessPos.unshift(this.letters[event.key]);\n        this.pos+=1;\n      }\n    }else if (event.keyCode === 46 || event.keyCode === 8) {\n        this.pos -= 1;\n        if (this.pos <= 0) this.pos = 0;\n        $(`.let-${this.guessPos[0]}`).removeClass(`guess-${this.pos} guessed`);\n        this.guessPos.shift();\n    }else if (event.keyCode === 13) {\n      this.soundGuess.currentTime = 0;\n      this.soundRightGuess.currentTime = 0;\n      this.guess();\n      this.guessPos = [];\n      this.pos = 0;\n    }else if(event.keyCode === 32) {\n      this.soundShuffle.currentTime = 0;\n      if (this.music) {\n        this.soundShuffle.play();\n      }\n      this.shuffleLetters();\n    }else if(event.keyCode === 49){\n      this.soundToggle();\n    }\n  }\n\n  addListeners() {\n    document.addEventListener('keydown', this.listenerFunction);\n    $(\"#twist\").on(\"click\", this.shuffleLetters);\n    $(\"#sound-button\").on(\"click\", this.soundToggle);\n  }\n  soundToggle(){\n    if (this.music) {\n      this.music = false;\n    }else {\n      this.music = true;\n    }\n  }\n  turnListenersOff() {\n    document.removeEventListener('keydown', this.listenerFunction);\n    $(\"#twist\").off(\"click\", this.shuffleLetters);\n    $(\"#sound-button\").off(\"click\", this.soundToggle);\n  }\n  gameOver(){\n    if (this.levelCounter === 9 && this.nextRound){\n      this.game.saveScore();\n      this.turnListenersOff();\n      $('#board-container').append(\n        `<li class=\"new-game\"><div id=\"congrats\">Congratulations! You've completed the last level</div></li><li class=\"new-game\"><button id=\"new-game-button\" onClick=\"startGame()\">New Game\n        </button> <input id=\"username\" autocomplete=\"off\" placeholder=\"Name\" type=\"text\"></input></li>`\n      );\n    }else if (this.nextRound) {\n        this.turnListenersOff();\n        this.nextRound = false;\n        this.levelCounter +=1;\n        this.game.addRound();\n        $('#board-container').append(\n          `<li class=\"new-game\"><button id=\"new-game-button\" onClick=\"endOfRound()\">Next Round</button></li>`\n        );\n      }else {\n      this.game.saveScore();\n      this.turnListenersOff();\n      $('#board-container').append(\n        `<li class=\"new-game\"><button id=\"new-game-button\" onClick=\"startGame()\">New Game\n        </button> <input id=\"username\" autocomplete=\"off\" placeholder=\"Name\" type=\"text\"></input></li>`\n      );\n    }\n  }\n  endOfRound() {\n    this.setWords();\n    this.board = this.makeBoard();\n    this.setLetters();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n\n//# sourceURL=webpack:///./lib/view.js?");

/***/ })

/******/ });