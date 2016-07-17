var maxGuessCount = 25;

exports.isGuessCorrect = function(currentWord, realWord) {
	return currentWord === realWord;
};

exports.isGuessCountOver = function(incorrectGuesses) {
	return incorrectGuesses === maxGuessCount;
};

var getGuessesLeft = function(currentGuessCount) {
	return maxGuessCount - currentGuessCount;
};

exports.containsLetter = function(realWord, guessedLetter) {
	return realWord.indexOf(guessedLetter) >= 0;
};

exports.getWordDisplay = function(currentWord, incorrectGuesses){
	return currentWord + ' (Guesses left: ' + getGuessesLeft(incorrectGuesses) + ')';
};