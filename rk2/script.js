$(document).ready(function(){
	$("nav a").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("main,body,html").animate({scrollTop: destination }, 800);
	});
});
