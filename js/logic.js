// this file contains the logic to play a song and generate character images

$(document).ready(function() {

	// initializes scoreboard
	var scoreboard;

	// create an array of base series string values
	var series = [];

	// tracks button clicked status
	var clicked = [];

	// initializes page (i.e. characters, score)
	initializeGame();

	// randomly picks from options
	var random;

	randomPick();

	// assigns value of selected array element to variable
	var selected = series[random];

	// initializes audio (picks audio track based on selected character / score)
	initializeAudio();


	// when character guesses are made by user

		// when Mario is selected
		$('#select-mario').click(function() {

			if (selected == 'Mario') {
  				message = "1UP for you!";
  				button_colour = "success";
				clicked['mario'] = "right";
				disableButtons();
  			} else {
  				message = "Sorry, not Mario.";
  				button_colour = "danger";
				clicked['mario'] = "wrong";
				decreaseScore();
  			}

			$('#select-mario').replaceWith('<button type="button" class="btn btn-' + button_colour + '" id="select-mario" disabled="disabled">' + message + '</button>');

		});

		// when Link is selected
		$('#select-link').click(function() {

			if (selected == 'Link') {
  				message = "Extra heart!";
  				button_colour = "success";
  				clicked['link'] = "right";
				disableButtons();
  			} else {
  				message = "Sorry, not Link.";
  				button_colour = "danger";
  				clicked['link'] = "wrong";
  				decreaseScore();
  			}

			$('#select-link').replaceWith('<button type="button" class="btn btn-' + button_colour + '" id="select-link" disabled="disabled">' + message + '</button>');
			
		});

		// when Samus is selected
		$('#select-samus').click(function() {

			if (selected == 'Samus') {
  				message = "Hyper beam found!";
  				button_colour = "success";
  				clicked['samus'] = "right";
				disableButtons();
  			} else {
  				message = "Sorry, not Samus.";
  				button_colour = "danger";
  				clicked['samus'] = "wrong";
  				decreaseScore();
  			}

			$('#select-samus').replaceWith('<button type="button" class="btn btn-' + button_colour + '" id="select-samus" disabled="disabled">' + message + '</button>');
			
		});

		// when Donkey Kong is selected
		$('#select-dk').click(function() {

			if (selected == 'DK') {
  				message = "Bananas for all!";
  				button_colour = "success";
  				clicked['dk'] = "right";
				disableButtons();
  			} else {
  				message = "Sorry, not DK.";
  				button_colour = "danger";
  				clicked['dk'] = "wrong";
  				decreaseScore();
  			}

			$('#select-dk').replaceWith('<button type="button" class="btn btn-' + button_colour + '" id="select-dk" disabled="disabled">' + message + '</button>');
			
		});

		// when Fox McCloud is selected
		$('#select-fox').click(function() {

			if (selected == 'Fox') {
  				message = "Do a barrel roll!";
  				button_colour = "success";
  				clicked['fox'] = "right";
				disableButtons();
  			} else {
  				message = "Sorry, not Fox.";
  				button_colour = "danger";
  				clicked['fox'] = "wrong";
  				decreaseScore();
  			}

			$('#select-fox').replaceWith('<button type="button" class="btn btn-' + button_colour + '" id="select-fox" disabled="disabled">' + message + '</button>');
			
		});

	// end character click



	// when reboot button is selected
	$('#reboot-game').click(function() {

		location.reload();

	});


/*
		// console log for debugging
		alert('Reboot was clicked!');

		// restores game state to default
		initializeGame();

		// randomly picks again
		randomPick();

		// assigns new random pick to selected
		selected = series[random];

		// randomly loads a new audio track
		initializeAudio();

		$('#scoreboard').replaceWith('<div id="scoreboard">Hearts: 5</div>');


		// convert series names to lowercase for button values
		var series_lower = [];

		for (var i = 0; i < series.length; i++) {
			series_lower[i] = series[i].toLowerCase();
		}

		alert("Series_lower is now: " + series_lower.toString());


		for(var index in series_lower) {
			clicked[index] = "ready";
		}

		alert("Clicked is now: " + clicked.toString());

		alert("Series_lower is now: " + series_lower.toString());

		i = 0;

		// re-initializes character buttons to default
		for (var i = 0; i < series.length; i++) {

			alert("The index value in this reboot is " + series_lower[i]);

			$('#select-' + series_lower[i]).replaceWith('<button type="button" class="btn btn-primary" id="select-' + series_lower[i] + '">This song is ' + series[i] + '!</button>');

			alert("This button value is now: #select-" + series_lower[i]);

		}
										
		alert("Selected is now: " + selected.toString());

		alert("Clicked is now: " + clicked.toString());
	});

*/


	// randomly pick
	function randomPick() {

		// randomly select song + image (integer)
		random = Math.floor(Math.random()*5);

	}

	// initialize game
	function initializeGame() {

		// resets scoreboard
		scoreboard = 5;

		// creates game series array and assigns base values
		series[0] = "Mario";
		series[1] = "Link";
		series[2] = "Samus";
		series[3] = "DK";
		series[4] = "Fox";

		// creates clicked status array and assigns base values
		clicked['mario'] = "ready";
		clicked['link'] = "ready";
		clicked['samus'] = "ready";
		clicked['dk'] = "ready";
		clicked['fox'] = "ready";

	} // end initialize game function


	// creates audio player elements, based on randomly selected character and corresponding song 
	function initializeAudio() {

		// generate audio player with randomly selected audio clip
		$('#random_song').html('<audio controls><source src="audio/' + series[random] + '.mp3" type="audio/mpeg">Unfortunately, it appears that your browser does not support the audio playback element.</audio>');

	} // end audio initialization function


	// function to update all buttons upon click
	function disableButtons() {

		// sets variable with message for disabled / not selected buttons
		var message = "Not selected.";

		// update all buttons that have not been clicked yet
		for(var index in clicked) {

			if (clicked[index] == "ready") {
				$('#select-' + index).replaceWith('<button type="button" class="btn btn-primary" id="select-' + index + '" disabled="disabled">' + message + '</button>');
			}

		}

	} // end disable buttons function


	// decreases current score by 1
	function decreaseScore() {

		scoreboard--;

		// updates scoreboard element
		$('#scoreboard').replaceWith('<div id="scoreboard">Hearts: ' + scoreboard + '</div>');

	} // end decrease score function

}); //end ready]