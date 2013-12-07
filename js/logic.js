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

	// debugging, delete when done
	alert("Value of random is " + random + ", character is " + selected);

	// initializes audio (picks audio track based on selected character / score)
	initializeAudio();

	// when character guesses are made by user

		// when Mario is selected
		$('#select-mario').click(function() {

			// console log for debugging
			alert('Mario was clicked!');

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

			// console log for debugging
			alert('Link was clicked!');

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

			// console log for debugging
			alert('Samus was clicked!');

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

			// console log for debugging
			alert('Donkey Kong was clicked!');

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

			// console log for debugging
			alert('Fox McCloud was clicked!');

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

		// re-initializes clicked tracking
		for(var index in clicked) {
			clicked[index] = "ready";

			alert("The current value of initialization is " + index);		
		}

		var series_lower = series.slice(0);

		alert(series_lower.toString());

		// re-initializes character buttons to default
		for (var i = 0; i < series_lower.length; i++) {
			alert("The index value in this reboot is " + series_lower[i]);

			$('#select-' + index).replaceWith('<button type="button" class="btn btn-primary" id="select-' + series_lower[i] + '">This song is ' + series[index] + '!</button>');
		}

	});


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

	}


	// creates audio player elements, based on randomly selected character and corresponding song 
	function initializeAudio() {

		// generate audio player with randomly selected audio clip
		$('#random_song').html('<audio controls><source src="audio/' + series[random] + '.mp3" type="audio/mpeg">Unfortunately, it appears that your browser does not support the audio playback element.</audio>');

	}


	// function to update all buttons upon click
	function disableButtons() {

		// sets variable with message for disabled / not selected buttons
		var message = "Not selected.";

		// update all buttons that have not been clicked yet
		for(var index in clicked) {

			alert("The current value of index is " + index);

			if (clicked[index] == "ready") {
				$('#select-' + index).replaceWith('<button type="button" class="btn btn-primary" id="select-"' + index + '" disabled="disabled">' + message + '</button>');
			}

		}

	} // end disable buttons


	// decreases current score by 1
	function decreaseScore() {

		scoreboard--;

		// updates scoreboard element
		$('#scoreboard').replaceWith('<div id="scoreboard">Hearts: ' + scoreboard + '</div>');
	}

}); //end ready]