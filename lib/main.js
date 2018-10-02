import {level1, level2, level3} from './dictionary.js';
import View from './view.js';
import Game from './game.js';

// window.gameOver = () =>{
//   if (($('#timer-time').html() === "0")){
//     return true;
//   }else if(!($(".hidden-letter").length)){
//     return true;
//   }else {
//     return false;
//   }
// };

// window.newGame = () =>{
//   board();
//   game();
//   keepTime();
// };


document.addEventListener("DOMContentLoaded", ()=> {
  // const board = $('#board-list');
  const game = new Game();
  const view = new View(game);


});
