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
/*! exports provided: level1, level2, level3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level1\", function() { return level1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level2\", function() { return level2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level3\", function() { return level3; });\nconst level1 = {\n  ads: \"ADS\",\n  age: \"AGE\",\n  ash: \"ASH\",\n  gad: \"GAD\",\n  gas: \"GAS\",\n  had: \"HAD\",\n  hag: \"HAG\",\n  has: \"HAS\",\n  sad: \"SAD\",\n  sag: \"SAG\",\n  sea: \"SEA\",\n  she: \"SHE\",\n  aged: \"AGED\",\n  ages: \"AGES\",\n  dash: \"DASH\",\n  gads: \"GADS\",\n  gash: \"GASH\",\n  hags: \"HAGS\",\n  head: \"HEAD\",\n  shad: \"SHAD\",\n  shag: \"SHAG\",\n  shed: \"SHED\",\n  ashed: \"ASHED\",\n  heads: \"HEADS\",\n  shade: \"SHADE\",\n  gashed: \"GASHED\"\n};\n\nconst level2 = {\n  ins: \"INS\",\n  its: \"ITS\",\n  nit: \"NIT\",\n  nut: \"NUT\",\n  sin: \"SIN\",\n  sit: \"SIT\",\n  sun: \"SUN\",\n  tin: \"TIN\",\n  tun: \"TUN\",\n  nits: \"NITS\",\n  nuts: \"NUTS\",\n  quit: \"QUIT\",\n  snit: \"SNIT\",\n  stun: \"STUN\",\n  suit: \"SUIT\",\n  tins: \"TINS\",\n  tuns: \"TUNS\",\n  unit: \"UNIT\",\n  quits: \"QUITS\",\n  units: \"UNITS\",\n  squint: \"SQUINT\"\n};\n\nconst level3 = {\n  are: \"ARE\",\n  ark: \"ARK\",\n  ear: \"EAR\",\n  era: \"ERA\",\n  hen: \"HEN\",\n  her: \"HER\",\n  ken: \"KEN\",\n  rah: \"RAH\",\n  ran: \"RAN\",\n  ankh: \"ANKH\",\n  earn: \"EARN\",\n  hank: \"HANK\",\n  hare: \"HARE\",\n  hark: \"HARK\",\n  hear: \"HEAR\",\n  khan: \"KHAN\",\n  near: \"NEAR\",\n  rake: \"RAKE\",\n  rank: \"RANK\",\n  rhea: \"RHEA\",\n  hanker: \"HANKER\"\n};\n\n\n//# sourceURL=webpack:///./lib/dictionary.js?");

/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Game {\n  constructor(name) {\n    this.round = 0;\n    this.score = 0;\n    this.name = name;\n  }\n  addScore(letterCount=0){\n    if (letterCount === 0) {\n      $('#score-counter').html(`${this.score}`);\n    }else {\n      this.score = (500*letterCount)+1000 + this.score;\n      $('#score-counter').html(`${this.score}`);\n    }\n  }\n  addRound() {\n    this.round +=1;\n    $('#round-counter').html(`${this.round}`);\n  }\n  saveScore() {\n    firebase.database().ref().child('scores/').push({\n    name: this.name,\n    score: this.score,\n  });\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n\n//# sourceURL=webpack:///./lib/game.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ \"./lib/view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=> {\n  let view;\n  window.startGame = ()=>{\n    view = new _view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]($('input').val());\n  $('.new-game').empty();\n  };\n  window.endOfRound = ()=>{\n    view.endOfRound();\n    $('.new-game').empty();\n  };\n  $('#board-container').append(\n    `<li class=\"new-game\"><button id=\"new-game-button\" onClick=\"startGame()\">New Game\n    </button> <input id=\"username\" autocomplete=\"off\" placeholder=\"Name\" type=\"text\"></input></li>`\n  );\n\n\n\n});\n\n\n//# sourceURL=webpack:///./lib/main.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dictionary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dictionary.js */ \"./lib/dictionary.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./lib/util.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game.js */ \"./lib/game.js\");\n\n\n\n\nclass View {\n  constructor(name) {\n    this.playGame(name);\n  }\n  playGame(name) {\n    this.addListeners = this.addListeners.bind(this);\n    this.newRound = this.newRound.bind(this);\n    this.setLetters = this.setLetters.bind(this);\n    this.endOfRound = this.endOfRound.bind(this);\n    this.gameOver = this.gameOver.bind(this);\n    this.keepTime = this.keepTime.bind(this);\n    this.listenerFunction = this.listenerFunction.bind(this);\n    this.clear = this.clear.bind(this);\n    this.nextRound = false;\n    this.game = new _game_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](name);\n    this.game.addScore();\n    this.game.addRound();\n    this.levels = this.levelOrder();\n    this.levelCounter = 0;\n    this.board = $('#board-list');\n    this.pos = 0;\n    this.guessPos = [];\n    this.words = this.levels[this.levelCounter];\n    this.remainingWords = this.words.length;\n    this.board = this.makeBoard();\n    this.setLetters();\n  }\n  levelOrder() {\n    let levels = [_dictionary_js__WEBPACK_IMPORTED_MODULE_0__[\"level1\"],_dictionary_js__WEBPACK_IMPORTED_MODULE_0__[\"level2\"],_dictionary_js__WEBPACK_IMPORTED_MODULE_0__[\"level3\"]];\n    return Object(_util_js__WEBPACK_IMPORTED_MODULE_1__[\"shuffle\"])(levels);\n  }\n  setWords() {\n    this.words = this.levels[this.levelCounter];\n  }\n  setLetters(){\n    this.let0 = $(`.let-0`);\n    this.let1 = $(`.let-1`);\n    this.let2 = $(`.let-2`);\n    this.let3 = $(`.let-3`);\n    this.let4 = $(`.let-4`);\n    this.let5 = $(`.let-5`);\n    this.letters = {\n      [this.let0.html().toLowerCase()] : 0,\n      [this.let1.html().toLowerCase()] : 1,\n      [this.let2.html().toLowerCase()] : 2,\n      [this.let3.html().toLowerCase()] : 3,\n      [this.let4.html().toLowerCase()] : 4,\n      [this.let5.html().toLowerCase()] : 5,\n    };\n  }\n  newRound() {\n    const level = Object.values(this.words).reverse();\n    this.lastWord = level[0];\n    let wordArr = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__[\"shuffle\"])(this.lastWord.split(\"\"));\n    let pos = 0;\n    while(pos<6){\n      $(`.let-${pos}`).html(`${wordArr[0]}`);\n      wordArr = wordArr.slice(1);\n      pos += 1;\n    }\n    this.keepTime();\n  }\n  makeBoard() {\n    const level = Object.values(this.words);\n    let currentWord = \"\";\n    $('#board-list').empty();\n    for (let i = 0; i < level.length; i++) {\n      $('#board-list').append(\n        `<li class=\"word\"><ul id=\"word-${i}\"></ul></li>`\n      );\n      currentWord = level[i].split(\"\");\n      for (let j = 0; j < currentWord.length; j++) {\n        $(`#word-${i}`).append(\n        `<li class=\"letter\"><span class=\"hidden-letter ${level[i]}\">${currentWord[j]}</span></li>`\n      );\n      }\n    }\n    this.newRound();\n    this.addListeners();\n  }\n  keepTime() {\n    this.timer = 10;\n    let timer = setInterval(()=>{\n        if(this.timer >-1){\n          $('#timer-time').html(`${Object(_util_js__WEBPACK_IMPORTED_MODULE_1__[\"formatTime\"])(this.timer--)}`);\n          this.timer = this.timer;\n        }else if (this.timer === -1) {\n          this.guess();\n          this.guessPos = [];\n          this.pos = 0;\n          this.gameOver();\n          this.timer = 10;\n          clearInterval(timer);\n\n        }else {\n          clearInterval(timer);\n        }\n      }, 1000);\n  }\n  guess() {\n    const guessArr = this.guessPos.reverse();\n    let guessString = \"\";\n    for (let i = 0; i < guessArr.length; i++) {\n      guessString += $(`.let-${guessArr[i]}`).html();\n    }\n    this.clear();\n    this.revealWord(guessString);\n  }\n  revealWord(word) {\n    if(this.words[word.toLowerCase()]){\n      $(`.${word}`).removeClass(\"hidden-letter\");\n      this.game.addScore(word.length);\n      this.remainingWords--;\n      if (word === this.lastWord) {\n        this.nextRound = true;\n      }\n      delete this.words[word.toLowerCase()];\n    }\n  }\n  shuffleLetters() {\n    let shuffleArr = Object(_util_js__WEBPACK_IMPORTED_MODULE_1__[\"shuffle\"])([0,1,2,3,4,5]);\n    let letters = [];\n    let classes = \"\";\n    for (let i = 0; i < shuffleArr.length; i++) {\n      letters.push($(`.let-${i}`));\n    }\n    for (let i = 0; i < letters.length; i++) {\n      letters[i].removeClass(`let-${i}`);\n      classes = letters[i].attr('class');\n      classes = `let-${shuffleArr[i]} ${classes}`;\n      letters[i].attr('class', classes);\n    }\n  }\n  clear() {\n    for (let i = 0; i < this.guessPos.length; i++) {\n      $(`.let-${this.guessPos[i]}`).removeClass(`guess-${i} guessed`);\n    }\n  }\n  listenerFunction(event) {\n    if (this.letters[event.key] !== undefined) {\n      if (!$(`.let-${this.letters[event.key]}`).hasClass(\"guessed\")) {\n        $(`.let-${this.letters[event.key]}`).addClass(`guess-${this.pos} guessed`);\n        this.guessPos.unshift(this.letters[event.key]);\n        this.pos+=1;\n      }\n    }else if (event.keyCode === 46 || event.keyCode === 8) {\n        this.pos -= 1;\n        if (this.pos <= 0) this.pos = 0;\n        $(`.let-${this.guessPos[0]}`).removeClass(`guess-${this.pos} guessed`);\n        this.guessPos.shift();\n    }else if (event.keyCode === 13) {\n      this.guess();\n      this.guessPos = [];\n      this.pos = 0;\n    }else if(event.keyCode === 32) {\n      this.guess();\n      this.guessPos = [];\n      this.pos = 0;\n      this.shuffleLetters();\n      this.setLetters();\n    }else {\n        console.log(event.keyCode);\n        console.log(event.key);\n        console.log($(`.let-${this.pos}`).innerHTML);\n    }\n  }\n\n  addListeners() {\n    document.addEventListener('keydown', this.listenerFunction);\n    $(\"#twist\").on(\"click\", this.shuffleLetters);\n  }\n  turnListenersOff() {\n    document.removeEventListener('keydown', this.listenerFunction);\n    $(\"#twist\").off(\"click\", this.shuffleLetters);\n  }\n  gameOver(){\n    if (this.nextRound) {\n      this.turnListenersOff();\n      this.nextRound = false;\n      this.levelCounter +=1;\n      this.game.addRound();\n      $('#board-container').append(\n        `<li class=\"new-game\"><button id=\"new-game-button\" onClick=\"endOfRound()\">Next Round</button></li>`\n      );\n    }else {\n      this.game.saveScore();\n      this.turnListenersOff();\n      $('#board-container').append(\n        `<li class=\"new-game\"><button id=\"new-game-button\" onClick=\"startGame()\">New Game\n        </button> <input id=\"username\" autocomplete=\"off\" placeholder=\"Name\" type=\"text\"></input></li>`\n      );\n    }\n  }\n  endOfRound() {\n    this.setWords();\n    this.board = this.makeBoard();\n    this.setLetters();\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (View);\n\n\n//# sourceURL=webpack:///./lib/view.js?");

/***/ })

/******/ });