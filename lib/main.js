import View from './view.js';

document.addEventListener("DOMContentLoaded", ()=> {
  let view;
  window.startGame = ()=>{
    view = new View($('input').val());
  $('.new-game').empty();
  };
  window.endOfRound = ()=>{
    view.endOfRound();
    $('.new-game').empty();
  };
  $('#board-container').append(
    `<li class="new-game"><button id="new-game-button" onClick="startGame()">New Game
    </button> <input id="username" autocomplete="off" placeholder="Name" type="text"></input></li>`
  );



});
