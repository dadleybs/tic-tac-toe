// JavaScript document
// Play the game
$(document).ready(function() {	
  $('#again').hide();
  var board = ['#a1', '#a2', '#a3', '#b1', '#b2', '#b3', '#c1', '#c2', '#c3'];
  var boxes = _.map(board, $);
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
    var es = _.map(boxes, function(box) { return box.hasClass(player); } );
    return es[2] && es[4] && es[6] || 
      es[0] && es[1] && es[2] || 
      es[0] && es[3] && es[6] || 
      es[0] && es[4] && es[8] ||
      es[1] && es[4] && es[7] ||
      es[2] && es[5] && es[8] ||
      es[3] && es[4] && es[5] ||
      es[6] && es[7] && es[8];
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
    } else if ($('.clicked').length === 9)) {
      alert("The game is a tie! Try again?");
      $('#again').show();
    }
  }
  
  $('#again').click(function () {
    resetBoard();
  });
});