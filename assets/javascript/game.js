	
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
        	}
        	// Here we create the HTML that will be injected into our div and displayed on the page.
          var html = "<p>Press any letter to start playing!</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>tries: " + tries + "</p>";
          // Injecting the HTML we just created into our div and updating the game information on our page.
          document.querySelector("#scoresheet").innerHTML = html;
        }
         var userText = document.getElementById("guessed");

      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function() {
        userText.textContent = event.key;
      };