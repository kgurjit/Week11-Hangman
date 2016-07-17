var words = ['Titanic', 'Inception', 'Twilight', 'Armageddon', 'Transformers', 'Gladiator', 'Avatar', 'Jumanji'];

var getRandomWord = function(){
	var randomIdx = Math.floor(Math.random() * words.length);
	return words[randomIdx].toUpperCase();
};

exports.getRandomWord = getRandomWord;