function generate_guess() {

	// Words
	var words = [
		$("#word1").val(),
		$("#word2").val(),
		$("#word3").val(),
		$("#word4").val(),
		$("#word5").val(),
		$("#word6").val(),
		$("#word7").val(),
		$("#word8").val()
	];

	// Booleans
	var status = [1, 1, 1, 1, 1, 1, 1, 1];

	// Variable inputs
	var guess_num = $("#guess_num").text();
	var correct_chars = $("#correct_chars").val();
	// var answer = $("#guess_word").text();

	if(guess_num == 0) {
		$("#guess_word").text(words[0]);
		$("#guess_num").text(1);
	}
	else if(guess_num == 1) {
		if(correct_chars == 0) {
			var cur_guess = $("#guess_word").text();
			$.each(words, function(index, value) {
				for(var i = 0; i < value.length; i++) {
					if(cur_guess[i] == value[i]) {
						// add line through this word
					}
				}
			});
		}
		//alert(sum);
	}
	




	// alert(words[0]);
}