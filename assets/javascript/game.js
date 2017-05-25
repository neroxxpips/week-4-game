
//Declare variables
var wins = 0;
var losses = 0;
var sum = 0;

//Declare a random number from 19 to 120
var total = Math.floor((Math.random()* 102) + 19);

//Assign a random number from 1 to 12  to crystals
var red = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);
var purple = Math.floor((Math.random()* 12) + 1);


//This function updates the Sum
var updateSum = function (){
	$('.sum').empty();
	$('.sum').append(sum);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}

//This function restarts the game and resets the values
var restart = function(){
	sum = 0;
	total = Math.floor((Math.random()* 100) + 19);
	$('.total').empty();
	$('.total').append(total);
	red = Math.floor((Math.random()* 12) + 1);
	blue = Math.floor((Math.random()* 12) + 1);
	yellow = Math.floor((Math.random()* 12) + 1);
	green = Math.floor((Math.random()* 12) + 1);
	updateSum();
}

//The algorithm behind the game
var theGame = function (){
	if (sum == total) {
		wins++;
		restart();
	}else if(sum > total){
		losses++;
		restart();
	}else{
		updateSum();
	}
}

$('.total').append(total);
$('.sum').append(sum);


$(document).ready(function(){
	$('#red').click(function(){
		sum = sum + red;
		theGame();
	})
	$('#blue').click(function(){
		sum = sum + blue;
		theGame();
	})
	$('#green').click(function(){
		sum = sum + green;
		theGame();
	})
	$('#purple').click(function(){
		sum = sum + purple;
		theGame();
	})
});
