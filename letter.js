exports.getWord = function(word, lettersGuessed){
	var toPrint = '';
	for(var idx=0;idx<word.length;idx++) {
		if(lettersGuessed.indexOf(word[idx]) >= 0){
			toPrint = toPrint + word[idx];
		} else {
			toPrint = toPrint + '_';
		}
	}
	return toPrint;
};