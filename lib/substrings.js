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
/*! exports provided: level1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level1\", function() { return level1; });\nconst level1 = {\n  ads: \"ads\",\n  age: \"age\",\n  ash: \"ash\",\n  gad: \"gad\",\n  gas: \"gas\",\n  had: \"had\",\n  hag: \"hag\",\n  has: \"has\",\n  sad: \"sad\",\n  sag: \"sag\",\n  sea: \"sea\",\n  she: \"she\",\n  aged: \"aged\",\n  ages: \"ages\",\n  dash: \"dash\",\n  gads: \"gads\",\n  gash: \"gash\",\n  hags: \"hags\",\n  head: \"head\",\n  shad: \"shad\",\n  shag: \"shag\",\n  shed: \"shed\",\n  ashed: \"ashed\",\n  heads: \"heads\",\n  shade: \"shade\",\n  gashed: \"gashed\"\n};\n\n\n//# sourceURL=webpack:///./lib/dictionary.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dictionary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dictionary.js */ \"./lib/dictionary.js\");\n\n\nconst shuffle = (word)=>{\n    for (let i = word.length - 1; i > 0; i--) {\n        const j = Math.floor(Math.random() * (i + 1));\n        [word[i], word[j]] = [word[j], word[i]];\n    }\n    return word;\n};\n\nconst formatTime = (seconds) =>{\n  let minutes = Math.floor(seconds/60);\n  let secs = seconds%60;\n  const tmpSec = `0${secs}`;\n  const paddedSeconds = tmpSec.slice(tmpSec.length - 2);\n  return `${minutes}:${paddedSeconds}`;\n};\n\nwindow.keepTime = ()=>{\n  let seconds = 120;\n    setInterval(function(){\n      if(seconds >-1){\n        $('#timer-time').html(`${formatTime(seconds--)}`);\n      }\n    }, 1000);\n};\n\nwindow.addScore = (letterCount)=>{\n  let score = $('#score-counter').html();\n  score = (500*letterCount)+1000 + parseInt(score);\n  $('#score-counter').html(`${score}`);\n  return score;\n};\n\nwindow.game = () =>{\n\n  const level = Object.values(_dictionary_js__WEBPACK_IMPORTED_MODULE_0__[\"level1\"]).reverse();\n  const lastWord = level[0];\n  let wordArr = shuffle(lastWord.split(\"\"));\n  let pos = 0;\n  while(pos<6){\n    $(`.let-${pos}`).html(`${wordArr[0]}`);\n    wordArr = wordArr.slice(1);\n    pos += 1;\n  }\n};\n\nwindow.board = () => {\n  const level = Object.values(_dictionary_js__WEBPACK_IMPORTED_MODULE_0__[\"level1\"]);\n  let currentWord = \"\";\n  for (let i = 0; i < level.length; i++) {\n    $('#board-list').append(\n      `<li class=\"word\"><ul id=\"word-${i}\"></ul></li>`\n    );\n    currentWord = level[i].split(\"\");\n    for (let j = 0; j < currentWord.length; j++) {\n      $(`#word-${i}`).append(\n      `<li class=\"letter\"><span class=\"hidden-letter ${level[i]}\">${currentWord[j]}</span></li>`\n    );\n    }\n  }\n};\n\nwindow.reveal = (word)=> {\n  if(words[word]){\n    $(`.${word}`).removeClass(\"hidden-letter\");\n    addScore(word.length);\n  }\n};\n\nwindow.clear = (guessPos) =>{\n  for (let i = 0; i < guessPos.length; i++) {\n    $(`.let-${guessPos[i]}`).removeClass(`guess-${i}`);\n  }\n};\n\n\nwindow.guess = (guessPos) =>{\n  const guessArr = guessPos.reverse();\n  let guessString = \"\";\n  for (let i = 0; i < guessArr.length; i++) {\n    guessString += $(`.let-${guessArr[i]}`).html();\n  }\n  clear(guessPos);\n  reveal(guessString);\n};\n\nwindow.gameOver = () =>{\n  if (($('#timer-time').html() === \"0\")){\n    return true;\n  }else if(!($(\".hidden-letter\").length)){\n    return true;\n  }else {\n    return false;\n  }\n};\n\nwindow.newGame = () =>{\n  board();\n  game();\n  while (!gameOver) {\n\n  }\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", ()=> {\n  let pos = 0;\n  let guessPos = [];\n  let score = 0;\n  const words = _dictionary_js__WEBPACK_IMPORTED_MODULE_0__[\"level1\"];\n  window.words = words;\n  newGame();\n\n  game();\n  board();\n  document.addEventListener('keydown', (event)=>{\n      if (event.key === $(`.let-0`).html()) {\n      $(`.let-0`).addClass(`guess-${pos}`);\n      guessPos.unshift(0);\n      pos+=1;\n    }else if (event.key === $(`.let-1`).html()) {\n      $(`.let-1`).addClass(`guess-${pos}`);\n      guessPos.unshift(1);\n      pos+=1;\n    }else if (event.key === $(`.let-2`).html()) {\n      $(`.let-2`).addClass(`guess-${pos}`);\n      guessPos.unshift(2);\n      pos+=1;\n    }else if (event.key === $(`.let-3`).html()) {\n      $(`.let-3`).addClass(`guess-${pos}`);\n      guessPos.unshift(3);\n      pos+=1;\n    }else if (event.key === $(`.let-4`).html()) {\n      $(`.let-4`).addClass(`guess-${pos}`);\n      guessPos.unshift(4);\n      pos+=1;\n    }else if (event.key === $(`.let-5`).html()) {\n      $(`.let-5`).addClass(`guess-${pos}`);\n      guessPos.unshift(5);\n      pos+=1;\n    }else if (event.keyCode === 46 || event.keyCode === 8) {\n        pos -= 1;\n        if (pos <= 0) pos = 0;\n        $(`.let-${guessPos[0]}`).removeClass(`guess-${pos}`);\n        guessPos.shift();\n    } else if (event.keyCode === 13) {\n      guess(guessPos);\n      guessPos = [];\n      pos = 0;\n    }else{\n        console.log(event.keyCode);\n        console.log(event.key);\n        console.log($(`.let-${pos}`).innerHTML);\n      }\n    }\n);\n\n\n});\n\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ })

/******/ });