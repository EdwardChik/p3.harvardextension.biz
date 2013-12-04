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

			if ($(selected).val() == 'Super Mario') {
  				message = "1UP for you!";
  			} else {
  				message = "Sorry, not Mario.";
  			}

			$('#select-mario').replaceWith('<button type="button" class="btn btn-primary" id="select-mario" disabled="disabled">' + message + '</button>');

		});




	// end character click




}); //end ready