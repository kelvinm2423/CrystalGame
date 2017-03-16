$(document).ready(function(){
	var numberToMatch;
	var total = 0;
	var crystal_1;
	var crystal_2;
	var crystal_3;
	var crystal_4;
	var randomNumber = function(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
	}

	function start() {
	// random number for user to match (game number)
	$("#numberToMatch").html(function(){
		numberToMatch = randomNumber(19, 120);
		return(numberToMatch);
	});
	crystal_1 = randomNumber(1, 7);
	crystal_2 = randomNumber(6, 12);
	crystal_3 = randomNumber(1, 7);
	crystal_4 = randomNumber(6, 12);

	total = 0;
	$('#total').html(total);
	};

	start();

	$("#crystal_l").click(function(){
		total = crystal_1 + total;
		
		if (total < numberToMatch) {
			$("#total").html(total);
			return(total);
		}
		else if (total > numberToMatch) {
			$("#total").html(total);
			alert("Sorry! You Lose!");
			start();
		}
		else {
			$("#total").html(total);
			$('#wins').html(wins);
			alert("You won!");
			start();
		}
	});

	$("#crystal_2").click(function(){
		total = crystal_2 + total;
		
		if (total < numberToMatch) {
			$("#total").html(total);
			return(total);
		}
		else if (total > numberToMatch) {
			$("#total").html(total);
			alert("Sorry! You Lose!");
			start();
		}
		else {
			$("#total").html(total);
			$('#wins').html(wins);
			alert("You won!");
			start();
		}

	});

	$("#crystal_3").click(function(){
		total = crystal_3 + total;
		
		if (total < numberToMatch) {
			$("#total").html(total);
			return(total);
		}
		else if (total > numberToMatch) {
			$("#total").html(total);
			alert("Sorry! You Lose!");
			start();
		}
		else {
			$("#total").html(total);
			$('#wins').html(wins);
			alert("You won!");
			start();
		}

	});

	$("#crystal_4").click(function(){
		total = crystal_4 + total;
		
		if (total < numberToMatch) {
			$("#total").html(total);
			return(total);
		}
		else if (total > numberToMatch) {
			$("#total").html(total);
			alert("Sorry! You Lose!");
			start();
		}
		else {
			$("#total").html(total);
			$('#wins').html(wins);
			alert("You won!");
			start();
		}
	});


}); 