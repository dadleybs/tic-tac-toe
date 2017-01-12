// JavaScript document
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

function makeClicked() {
		$('.box').click(function() {
			$(this).addClass('clicked');
		})
	};
function checkClicked(box) {
	if (!box.hasClass('clicked')) {
	makeClicked();
	return true;
	} else {
	alert("Sorry, that space has already been claimed. Try another one!");
	return false;
	}
}
function turnRed() {
		$('.box').click(function() {
			$(this).addClass('red');
		})
	};
function turnBlue() {
		$('.box').click(function() {
			$(this).addClass('blue');
		})
	};
function checkWin() {
	var red1 = $1.hasClass('red');
	var red2 = $2.hasClass('red');
	var red3 = $3.hasClass('red');
	var red4 = $4.hasClass('red');
	var red5 = $5.hasClass('red');
	var red6 = $6.hasClass('red');
	var red7 = $7.hasClass('red');
	var red8 = $8.hasClass('red');
	var red9 = $9.hasClass('red');
	var blue1 = $1.hasClass('blue');
	var blue2 = $2.hasClass('blue');
	var blue3 = $3.hasClass('blue');
	var blue4 = $4.hasClass('blue');
	var blue5 = $5.hasClass('blue');
	var blue6 = $6.hasClass('blue');
	var blue7 = $7.hasClass('blue');
	var blue8 = $8.hasClass('blue');
	var blue9 = $9.hasClass('blue');
	// check for Red win
	if (red3 && red5 && red7) {
		alert("Red wins! How about a rematch?");
		return true;
	} else if (red1 && red2 && red3) {
		alert("Red wins! How about a rematch?");
		return true;
	} else if (red1 && red4 && red7) {
		alert("Red wins! How about a rematch?");
		return true;
	} else if (red1 && red5 && red9) {
		alert("Red wins! How about a rematch?");
		return true;
	} else if (red2 && red5 && red8) {
		alert("Red wins! How about a rematch?");
		return true;
	} else if (red3 && red6 && red9) {
		alert("Red wins! How about a rematch?");
		return true;
	} else if (red4 && red5 && red6) {
		alert("Red wins! How about a rematch?");
		return true;
	} else if (red7 && red8 && red9) {
		alert("Red wins! How about a rematch?");
		return true;
	// check for Blue win
	} else if (blue1 && blue2 && blue3) {
		alert("Blue wins! How about a rematch?");
		return true;
	} else if (blue1 && blue4 && blue7) {
		alert("Blue wins! How about a rematch?");
		return true;
	} else if (blue1 && blue5 && blue9) {
		alert("Blue wins! How about a rematch?");
		return true;
	} else if (blue2 && blue5 && blue8) {
		alert("Blue wins! How about a rematch?");
		return true;
	} else if (blue3 && blue6 && blue9) {
		alert("Blue wins! How about a rematch?");
		return true;
	} else if (blue4 && blue5 && blue6) {
		alert("Blue wins! How about a rematch?");
		return true;
	} else if (blue7 && blue8 && blue9) {
		alert("Blue wins! How about a rematch?");
		return true;
	} else if (blue3 && blue5 && blue7) {
		alert("Blue wins! How about a rematch?");
		return true;
	// check for Draw
	} else if ($('.clicked').length === 9) {
		alert("The game is a tie! Try again?");
		return true;
	}
};
function resetBoard() {
	$('.box').removeClass('red blue clicked');
	$('#again').hide();
}
// Play the game
$(document).ready(function() {	
	$('#again').hide();
	$('.box').click(function() {
		var box = $(this);
		if (checkClicked(box)) {
			if (whoseTurn) { 
			turnRed(box);
			whoseTurn = false;
			} else if (!whoseTurn) { 
			turnBlue(box);
			whoseTurn = true;
			}
		} else {}
		if (checkWin()) {
			$('#again').show();
		} else {}
	});
	$('#again').click(function () {
		resetBoard();
	});
});