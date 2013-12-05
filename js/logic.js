// this file contains the logic to play a song and generate character images

$(document).ready(function() {

	// create an array of base series string values
	var series = [];

	// assign base series values to array
	series[0] = "Super Mario";
	series[1] = "The Legend of Zelda";
	series[2] = "Super Metroid";
	series[3] = "Donkey Kong Country";
	series[4] = "Star Fox";

	// tracks button clicked status
	var clicked = [];

	// initializes button states
	clicked['mario'] = "ready";
	clicked['link'] = "ready";
	clicked['samus'] = "ready";
	clicked['donkey-kong'] = "ready";
	clicked['fox-mccloud'] = "ready";

	// randomly select song + image (integer)
	var random = Math.floor(Math.random()*5);

	// assigns value of selected array element to variable
	var selected = series[random];

	// debugging, delete when done
	alert("Value of random is " + random + ", character is " + selected);

	// generate audio player with randomly selected audio clip
	$('#random_song').html('<audio controls><source src="audio/' + series[random] + '.mp3" type="audio/mpeg">Unfortunately, it appears that your browser does not support the audio playback element.</audio>');


	// when series are selected by user

		// when Mario is selected
		$('#select-mario').click(function() {

			// console log for debugging
			alert('Mario was clicked!');

			if (selected == 'Super Mario') {
  				message = "1UP for you!";
  				button_colour = "success";
				clicked['mario'] = "right";
				updateButtons(selected, button_colour);
  			} else {
  				message = "Sorry, not Mario.";
  				button_colour = "danger";
				clicked['mario'] = "wrong";
  			}

			$('#select-mario').replaceWith('<button type="button" class="btn btn-' + button_colour + '" id="select-mario" disabled="disabled">' + message + '</button>');

		});

		// when Link is selected
		$('#select-link').click(function() {

			// console log for debugging
			alert('Link was clicked!');

			if (selected == 'The Legend of Zelda') {
  				message = "Extra heart!";
  				button_colour = "success";
  				clicked['link'] = "right";
  			} else {
  				message = "Sorry, not Link.";
  				button_colour = "danger";
  				clicked['link'] = "wrong";
  			}

			$('#select-link').replaceWith('<button type="button" class="btn btn-' + button_colour + '" id="select-link" disabled="disabled">' + message + '</button>');
			
		});

		// when Samus is selected
		$('#select-samus').click(function() {

			// console log for debugging
			alert('Samus was clicked!');

			if (selected == 'Super Metroid') {
  				message = "Hyper beam found!";
  				button_colour = "success";
  				clicked['samus'] = "right";
  			} else {
  				message = "Sorry, not Samus.";
  				button_colour = "danger";
  				clicked['samus'] = "wrong";
  			}

			$('#select-samus').replaceWith('<button type="button" class="btn btn-' + button_colour + '" id="select-samus" disabled="disabled">' + message + '</button>');
			
		});

		// when Donkey Kong is selected
		$('#select-donkey-kong').click(function() {

			// console log for debugging
			alert('Donkey Kong was clicked!');

			if (selected == 'Donkey Kong Country') {
  				message = "Bananas for all!";
  				button_colour = "success";
  				clicked['donkey-kong'] = "right";
  			} else {
  				message = "Sorry, not DK.";
  				button_colour = "danger";
  				clicked['donkey-kong'] = "wrong";
  			}

			$('#select-donkey-kong').replaceWith('<button type="button" class="btn btn-' + button_colour + '" id="select-donkey-kong" disabled="disabled">' + message + '</button>');
			
		});

		// when Fox McCloud is selected
		$('#select-fox-mccloud').click(function() {

			// console log for debugging
			alert('Fox McCloud was clicked!');

			if (selected == 'Star Fox') {
  				message = "Do a barrel roll!";
  				button_colour = "success";
  				clicked['fox-mccloud'] = "right";
  			} else {
  				message = "Sorry, not Fox.";
  				button_colour = "danger";
  				clicked['fox-mccloud'] = "wrong";
  			}

			$('#select-fox-mccloud').replaceWith('<button type="button" class="btn btn-' + button_colour + '" id="select-fox-mccloud" disabled="disabled">' + message + '</button>');
			
		});

	// end character click


	// function to update all buttons upon click
	function updateButtons(message, button_colour) {

		// if user guessed right, update all buttons
		if (button_colour == 'success') {

		} else {

		}

	} // end update buttons

}); //end ready