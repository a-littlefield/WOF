// I need a bunch of words with one of the words randomly selected to be the word the user tries to guess.
//I then need every word to have a list of 3 hints to go along with it. The starting hint to display as soon as the word is chosen, the next hint to display when the user has guess incorrectly 2 times and the last hint to display on users last try.




$(document).ready(function() {
	let hide = $()
	let game = new Game();
	game.wordBox();
	$('.letters').click(function() {
		let clickedLetter = $(this).attr('id');
		game.letterSelect(clickedLetter);
		$(this).css({'color':'red'});
	});





});

function Game() {
	this.wordArray = ['ARAGORN', 'HALO', 'KANGAROO', 'PURPLE', 'FIREWORK'];
	self = this
	this.randomWord = function() {
		return this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
	}//end of randomword fun
	this.wordBox = function() {
		let rando = self.randomWord();
		for (var i = 0; i < rando.length; i++) {
			$('#box' + (i + 1)).data('.letter', rando[i]);
			console.log(rando);
		}
	};
	this.letterSelect = function(clickedLetter) {
		let letterBox = $('.letter-box');
		letterBox.each(function () {
			if($(this).data('.letter') == clickedLetter) {
				$(this).html(clickedLetter);
			}
		}); 
		let dataLetter = $('.letter-box').data('.letter');

	};



};//end of Game obj

