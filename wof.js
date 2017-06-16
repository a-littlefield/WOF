// I need a bunch of words with one of the words randomly selected to be the word the user tries to guess.
//I then need every word to have a list of 3 hints to go along with it. The starting hint to display as soon as the word is chosen, the next hint to display when the user has guess incorrectly 2 times and the last hint to display on users last try.




$(document).ready(function() {


	function Game() {
		this.wordArray = ['Aragorn', 'Halo', 'Kangaroo', 'something else else', 'something final'];
		self = this
		this.randomWord = function() {
			return this.wordArray[Math.floor(Math.random() * this.wordArray.length)];
		}//end of randomword fun
		this.wordBox = function() {
			let rando = self.randomWord();
			for (var i = 0; i < rando.length; i++) {
				$('#box1').text(rando[0]);
				$('#box2').text(rando[1]);
				$('#box3').text(rando[2]);
				$('#box4').text(rando[3]);
				$('#box5').text(rando[4]);
				$('#box6').text(rando[5]);
				$('#box7').text(rando[6]);
				$('#box8').text(rando[7]);
				$('#box9').text(rando[8]);
				$('#box10').text(rando[9]);
				$('#box11').text(rando[10]);
				$('#box12').text(rando[11]);
				console.log(rando);
			}
		}

	
	};//end of Game obj
	let game = new Game();
	game.wordBox();
	console.log(game.wordBox);




})