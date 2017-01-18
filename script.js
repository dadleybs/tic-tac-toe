// JavaScript document
// Play the game
$(document).ready(function() {	
  $('#again').hide();
  var board = ['#a1', '#a2', '#a3', '#b1', '#b2', '#b3', '#c1', '#c2', '#c3'];
  var $1 = $(board[0]);
  var $2 = $(board[1]);
  var $3 = $(board[2]);
  var $4 = $(board[3]);
  var $5 = $(board[4]);
  var $6 = $(board[5]);
  var $7 = $(board[6]);
  var $8 = $(board[7]);
  var $9 = $(board[8]);
  var whoseTurn = true;

  function makeClicked(box) {
    box.addClass('clicked');
  }

  function isClicked(box) {
    return box.hasClass('clicked');
  }

  function turnRed(thisElement) {
    thisElement.addClass('red');
  }

  function turnBlue(thatElement) {
    thatElement.addClass('blue');
  }

  function hasPlayerWon(player) {
    var e1 = $1.hasClass(player);
    var e2 = $2.hasClass(player);
    var e3 = $3.hasClass(player);
    var e4 = $4.hasClass(player);
    var e5 = $5.hasClass(player);
    var e6 = $6.hasClass(player);
    var e7 = $7.hasClass(player);
    var e8 = $8.hasClass(player);
    var e9 = $9.hasClass(player);
    return e3 && e5 && e7 || 
      e1 && e2 && e3 || 
      e1 && e4 && e7 || 
      e1 && e5 && e9 ||
      e2 && e5 && e8 ||
      e3 && e6 && e9 ||
      e4 && e5 && e6 ||
      e7 && e8 && e9;
  }

  function resetBoard() {
    $('.box').removeClass('red blue clicked');
    $('#again').hide();
  }

  $('.box').click(function() {
    var box = $(this);
    if (isClicked(box)) {
      alert("Sorry, that space has already been claimed. Try another one!");
    } else {
      makeClicked(box);
      if (whoseTurn) { 
        turnRed(box);
      } else { 
        turnBlue(box);
      }
      whoseTurn = !whoseTurn;
    }

    if (hasPlayerWon('blue')) {
      alert("Blue wins! How about a rematch?");
      $('#again').show();
    } else if (hasPlayerWon('red')) {
      alert("Red wins! How about a rematch?");
      $('#again').show();
    } else if ($('.clicked').length === 9) {
      alert("The game is a tie! Try again?");
      $('#again').show();
    }
  
  $('#again').click(function () {
    resetBoard();
  });
});