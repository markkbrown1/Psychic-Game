	
// variables needed for the game.
var letters = [ "a","b","c","d","e","f","g","h","i","j","k","l",
				"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins =0;
var loss = 0;
var tries = 10;

// on key up function
      document.onkeyup = function(event) {
        var userGuess = event.key;
        var computerGuess = letters[Math.floor(Math.random() * letters.length)];

        if ((userGuess === computerGuess)) {
        	wins++;
        	else losses++;
        }