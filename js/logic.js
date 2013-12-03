// this file contains the logic to play a song and generate character images

$(document).ready(function(){

	// create an array of base character string values
	var characters = [];

	// assign base filename values to characters in array
	characters['mario']			= "super_mario_world";
	characters['link']			= "legend_of_zelda";
	characters['samus']			= "super_metroid";
	characters['donkey_kong']	= "donkey_kong_country";
	characters['star_fox']		= "star_fox";




	$('#select-mario').click(function(){

		// console log for debugging
		console.log('Mario was clicked!');


	}); // end character click


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

}); //end ready