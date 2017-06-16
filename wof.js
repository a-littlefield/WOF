// I need a bunch of words with one of the words randomly selected to be the word the user tries to guess.
//I then need every word to have a list of 3 hints to go along with it. The starting hint to display as soon as the word is chosen, the next hint to display when the user has guess incorrectly 2 times and the last hint to display on users last try.




$(document).ready(function() {
	let hide = $()
	let game = new Game();
	game.wordBox();




});

function Game() {
	this.wordArray = ['Aragorn', 'Halo', 'Kangaroo', 'Purple', 'Firework'];
	self = this
	this.randomWord = function() {
		return this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
	}//end of randomword fun
	this.wordBox = function() {
		let rando = self.randomWord();
		for (var i = 0; i < rando.length; i++) {
			$('#box1').data('data-letter', rando[0]);
			$('#box2').data('data-letter', rando[1]);
			$('#box3').data('data-letter', rando[2]);
			$('#box4').data('data-letter', rando[3]);
			$('#box5').data('data-letter', rando[4]);
			$('#box6').data('data-letter', rando[5]);
			$('#box7').data('data-letter', rando[6]);
			$('#box8').data('data-letter', rando[7]);
			$('#box9').data('data-letter', rando[8]);
			$('#box10').data('data-letter', rando[9]);
			$('#box11').data('data-letter', rando[10]);
			$('#box12').data('data-letter', rando[11]);
		}
	};
	



};//end of Game obj

