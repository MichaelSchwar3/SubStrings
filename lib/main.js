import View from './view.js';
import {level1, level2, level3, level4, level5, level6, level7, level8, level9, level10} from './dictionary.js';

document.addEventListener("DOMContentLoaded", ()=> {
  let view;
  let levels = [level1,level2,level3,level4,level5,level6,level7,level8,level9,level10];
  window.startGame = ()=>{
    if ($('input').val() !== "") {
      view = new View(levels, $('input').val());
      $('.new-game').empty();
    }
  };
  window.endOfRound = ()=>{
    view.endOfRound();
    $('.new-game').empty();
  };
  $('#board-container').append(
    `<li class="new-game"><button id="new-game-button" onClick="startGame()">Play Game
    </button> <input id="username" autocomplete="off" placeholder="Name" type="text"></input></li>`
  );
  $('#username').focus();
});
