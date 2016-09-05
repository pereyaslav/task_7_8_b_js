$(document).ready(function () {
	$(".label-text").hide();
	$(".input-text").hover(function () {
		//		console.log(this);
		$(this).next().delay(300).fadeIn(500);
	}, function () {
		$(this).next().hide();
		$(this).next().clearQueue();
		$(this).next().stop();
	});
	$(".input-text").focus(function () {
		$(this).next().delay(300).fadeIn(500);
	});
	$(".input-text").focusout(function () {
		$(this).next().hide();
	});
	$(".button1").click(function () {
		$(".label-text").fadeIn(500);
	});
});