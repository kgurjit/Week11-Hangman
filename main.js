var game = require('./game.js');
var letter = require('./letter.js');
var word = require('./word.js');

var startGame = function() {
	process.stdin.resume();
	process.stdin.setEncoding('utf8');

	var randomWord = game.getRandomWord();
	var stdin = process.stdin;
	stdin.setRawMode(true);
	stdin.resume();
	stdin.setEncoding('utf8');

	var guessedLetters = [];
	var incorrectGuesses = 0;
	var currentWord = letter.getWord(randomWord, guessedLetters);
	var toDisplay = word.getWordDisplay(currentWord, incorrectGuesses);

	process.stdout.write(toDisplay);
	stdin.on('data', function(key) {
		if (key === '\u0003') {
			process.exit();
		}
		var code = key.charCodeAt();
		if(code >= 97 && code <=122) {
			code = code - 32;
		}

		if(code >= 65 && code <=90) {
			key = String.fromCharCode(code);

			if(!word.containsLetter(randomWord, key)) {
				incorrectGuesses++;
			} else {
				guessedLetters.push(key);
			}
			process.stdout.clearLine();
			process.stdout.cursorTo(0);
			currentWord = letter.getWord(randomWord, guessedLetters);
			if(word.isGuessCorrect(currentWord, randomWord)) {
				console.log('You win. The movie name is ' + randomWord);
				process.exit();
			}
			if(word.isGuessCountOver(incorrectGuesses)) {
				console.log('You loose. Your guesses are over. The correct movie name is ' + randomWord);
				process.exit();	
			}
			toDisplay = word.getWordDisplay(currentWord, incorrectGuesses);
			process.stdout.write(toDisplay);
		} 
	});
};

startGame();