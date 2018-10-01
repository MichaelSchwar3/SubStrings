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

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dictionary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dictionary.js */ \"./lib/dictionary.js\");\n\n\nconst shuffle = (word)=>{\n    for (let i = word.length - 1; i > 0; i--) {\n        const j = Math.floor(Math.random() * (i + 1));\n        [word[i], word[j]] = [word[j], word[i]];\n    }\n    return word;\n};\n\nconst formatTime = (seconds) =>{\n  let minutes = Math.floor(seconds/60);\n  let secs = seconds%60;\n  const tmpSec = `0${secs}`;\n  const paddedSeconds = tmpSec.slice(tmpSec.length - 2);\n  return `${minutes}:${paddedSeconds}`;\n};\n\nwindow.keepTime = ()=>{\n  let seconds = 120;\n    setInterval(function(){\n      if(seconds >-1){\n        $('#timer-time').html(`${formatTime(seconds--)}`);\n      }\n    }, 1000);\n};\n\nwindow.addScore = (letterCount)=>{\n  let score = $('#score-counter').html();\n  score = (500*letterCount)+1000 + parseInt(score);\n  $('#score-counter').html(`${score}`);\n  return score;\n};\n\nwindow.game = () =>{\n\n  const level = Object.values(_dictionary_js__WEBPACK_IMPORTED_MODULE_0__[\"level1\"]).reverse();\n  const lastWord = level[0];\n  let wordArr = shuffle(lastWord.split(\"\"));\n  let pos = 0;\n  while(pos<6){\n    $(`.let-${pos}`).html(`${wordArr[0]}`);\n    wordArr = wordArr.slice(1);\n    pos += 1;\n  }\n};\n\nwindow.board = () => {\n  const level = Object.values(_dictionary_js__WEBPACK_IMPORTED_MODULE_0__[\"level1\"]);\n  let currentWord = \"\";\n  for (let i = 0; i < level.length; i++) {\n    $('#board-list').append(\n      `<li class=\"word\"><ul id=\"word-${i}\"></ul></li>`\n    );\n    currentWord = level[i].split(\"\");\n    for (let j = 0; j < currentWord.length; j++) {\n      $(`#word-${i}`).append(\n      `<li class=\"letter\"><span class=\"hidden-letter ${level[i]}\">${currentWord[j]}</span></li>`\n    );\n    }\n  }\n};\n\nwindow.reveal = (word)=> {\n  if(words[word.toLowerCase()]){\n    $(`.${word}`).removeClass(\"hidden-letter\");\n    addScore(word.length);\n  }\n};\n\nwindow.clear = (guessPos) =>{\n  for (let i = 0; i < guessPos.length; i++) {\n    $(`.let-${guessPos[i]}`).removeClass(`guess-${i}`);\n  }\n};\n\nwindow.guess = (guessPos) =>{\n  const guessArr = guessPos.reverse();\n  let guessString = \"\";\n  for (let i = 0; i < guessArr.length; i++) {\n    guessString += $(`.let-${guessArr[i]}`).html();\n  }\n  clear(guessPos);\n  reveal(guessString);\n};\n\nwindow.shuffleLetters = () =>{\n  let shuffleArr = shuffle([0,1,2,3,4,5]);\n  let letters = [];\n  let classes = \"\";\n  for (let i = 0; i < shuffleArr.length; i++) {\n    letters.push($(`.let-${i}`));\n  }\n  for (let i = 0; i < letters.length; i++) {\n    letters[i].removeClass(`let-${i}`);\n    classes = letters[i].attr('class');\n    classes = `let-${shuffleArr[i]} ${classes}`;\n    letters[i].attr('class', classes);\n    // letters[i].addClass(`let-${shuffleArr[i]}`);\n  }\n};\n\nwindow.gameOver = () =>{\n  if (($('#timer-time').html() === \"0\")){\n    return true;\n  }else if(!($(\".hidden-letter\").length)){\n    return true;\n  }else {\n    return false;\n  }\n};\n\nwindow.newGame = () =>{\n  board();\n  game();\n  keepTime();\n};\n\nwindow.enter = () =>{\n\n};\n\nwindow.last = () =>{\n\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=> {\n  let pos = 0;\n  let guessPos = [];\n  let score = 0;\n  const words = _dictionary_js__WEBPACK_IMPORTED_MODULE_0__[\"level1\"];\n  window.words = words;\n  newGame();\n\n\n  document.addEventListener('keydown', (event)=>{\n      if (event.key === $(`.let-0`).html().toLowerCase()) {\n      $(`.let-0`).addClass(`guess-${pos}`);\n      guessPos.unshift(0);\n      pos+=1;\n    }else if (event.key === $(`.let-1`).html().toLowerCase()) {\n      $(`.let-1`).addClass(`guess-${pos}`);\n      guessPos.unshift(1);\n      pos+=1;\n    }else if (event.key === $(`.let-2`).html().toLowerCase()) {\n      $(`.let-2`).addClass(`guess-${pos}`);\n      guessPos.unshift(2);\n      pos+=1;\n    }else if (event.key === $(`.let-3`).html().toLowerCase()) {\n      $(`.let-3`).addClass(`guess-${pos}`);\n      guessPos.unshift(3);\n      pos+=1;\n    }else if (event.key === $(`.let-4`).html().toLowerCase()) {\n      $(`.let-4`).addClass(`guess-${pos}`);\n      guessPos.unshift(4);\n      pos+=1;\n    }else if (event.key === $(`.let-5`).html().toLowerCase()) {\n      $(`.let-5`).addClass(`guess-${pos}`);\n      guessPos.unshift(5);\n      pos+=1;\n    }else if (event.keyCode === 46 || event.keyCode === 8) {\n        pos -= 1;\n        if (pos <= 0) pos = 0;\n        $(`.let-${guessPos[0]}`).removeClass(`guess-${pos}`);\n        guessPos.shift();\n    } else if (event.keyCode === 13) {\n      guess(guessPos);\n      guessPos = [];\n      pos = 0;\n    }else if(event.keyCode === 32){\n      guess(guessPos);\n      guessPos = [];\n      pos = 0;\n      shuffleLetters();\n    }else{\n        console.log(event.keyCode);\n        console.log(event.key);\n        console.log($(`.let-${pos}`).innerHTML);\n      }\n    }\n);\n$(\"#twist\").on(\"click\", shuffleLetters);\n\n\n});\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });