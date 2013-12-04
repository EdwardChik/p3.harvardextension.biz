// this file contains the logic to play a song and generate character images

$(document).ready(function() {

	// create an array of base character string values
	var characters = [];

	// assign base character values to array
	characters[0] = "Mario";
	characters[1] = "Link";
	characters[2] = "Samus";
	characters[3] = "Donkey Kong";
	characters[4] = "Fox McCloud";



	// randomly select song + image (integer)
	var random = Math.floor(Math.random()*5);

	// assigns value of selected array element to variable
	var selected = characters[random];

	alert("Value of random is " + random + ", character is " + selected);

	// generate audio player with randomly selected audio clip
	// <source id="audio_player" src="audio/super_mario_world.mp3" type="audio/mpeg">

	$('#random_song').html('<audio controls><source src="audio/' + characters[random] + '.mp3" type="audio/mpeg">Unfortunately, it appears that your browser does not support the audio playback element.</audio>');


	// when characters are selected by user

		// when Mario is selected
		$('#select-mario').click(function(){

			// console log for debugging
			console.log('Mario was clicked!');



		});




	// end character click


	// randomly selects a character
	function randomSelect() {

		// randomly select song + image (integer)
		var random = math.floor(math.random()*6);

		// assigns value of selected array element to variable
		var selected = characters[random];

		// return selected character
		return selected;

	} // end of randomSelect function





	function play_sound(selected) {
		
		// stops currently playing song (if any)
		document.getElementById(color).pause();

		// play song
		document.getElementById(color).play();
		
	} // end of play sound function





	// fades in all images on the page
	$(window).load(function() {
		$('img').animate({'opacity':1}, 1000);
	});

}); //end ready