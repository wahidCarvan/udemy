
// make a secret number
var secretNumber = 4;
// ask user for a guess
var stringGuess= prompt("Guess a number");
// converts user guess into a number
var guess=Number(stringGuess);

// check if guess is right

if(guess === secretNumber){
	alert("you win!")
}
// other wise you guess to high guess again

else if(guess > secretNumber){
alert("too high, guess lower")
}
// when every thing is false else gets run
else{
	alert("too low guess again.")
}



