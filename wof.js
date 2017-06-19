// I need a bunch of words with one of the words randomly selected to be the word the user tries to guess.
//I then need every word to have a list of 3 hints to go along with it. The starting hint to display as soon as the word is chosen, the next hint to display when the user has guess incorrectly 2 times and the last hint to display on users last try.




$(document).ready(function() {
	let hide = $()
	let game = new Game();
	game.setUpNewWord();
	$('.letters').click(function() {
		if (game.gameInPlay){
			let clickedLetter = $(this).attr('id');
			$(this).addClass('alreadyClicked')
			game.letterSelect(clickedLetter);
			$(this).css({'color':'rgba(194, 0, 0, 1)'});	
		}
		game.gameOver();
	});
});

function Game() {
	self = this;
	this.gameInPlay = true;
	this.wordArray = ['ARAGORN', 'HALO', 'KANGAROO', 'PURPLE', 'FIREWORK'];
	this.randomWord = function() {
		return this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
	}//end of randomword fun
	this.setUpNewWord = function() {
		let rando = self.randomWord();
		for (var i = 0; i < rando.length; i++) {
			$('#box' + (i + 1)).attr('data-letter', rando[i]);
			//console.log(rando);

		}
	};
	this.letterSelect = function(clickedLetter) {
		let letterBox = $('.letter-box');
		let letterInWord = false;
		letterBox.each(function () {
			if($(this).attr('data-letter') == clickedLetter) {
				$(this).text(clickedLetter);
				letterInWord = true;
			} 
		});
		if(letterInWord === false){
			$('.correct-box').each(function () {
				if($(this).attr('src') == 'http://www.juliefoudyleadership.com/sports/lacrosse/index_files/stacks-image-b88a340.png'){
					$(this).attr('src', 'http://irongateequine.com/wp-content/uploads/2015/02/Red-X.png');
					return false;
				}

			});
		}
	};
	this.gameOver = function () {
		let letterBoxDataLetters = $('.letter-box');
		let allLettersFilledIn = true;
		if($('#check4').attr('src') === 'http://irongateequine.com/wp-content/uploads/2015/02/Red-X.png') {
			self.gameInPlay = false;
			$('#hints').html('Sorry you are all out of tries, refresh for a new game!');
			$('.letters').addClass('game-is-over');
		}
		letterBoxDataLetters.each(function () {
			if($(this).attr('data-letter') != '' && $(this).text() === ''){
				allLettersFilledIn = false;
				return false;
			}
		});
		if (allLettersFilledIn){
			self.gameInPlay = false;
			$('#hints').html('You win! Refresh to start new game!');
			$('.letters').addClass('game-is-over');
		}
	};
	this.hints = function (){
		
	}



};//end of Game obj

