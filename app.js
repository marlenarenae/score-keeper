$(document).ready(function() {

	var scor = 0;

	$(document).on("click", "#increase-5", function() {

		//Step 1: Add 5 to score variable
		//Step 2: Represent the new score on the UI

		score = score + 5;
		//score +=5;

		$("#score").html(score + "Points");
	});





});