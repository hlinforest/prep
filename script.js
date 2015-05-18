$(document).ready(function(){

	$("#hide").click(function(){
		$("img").hide();
	});

	$("#show").click(function(){
		$("img").show();
	});

	$(".sa").one("click", function(){

		$(this).append("&nbsp; (item added)");
	});

	$(".s1").one("click", function(){

		$(this).append("&nbsp; (you are on this step)");

	});
});

