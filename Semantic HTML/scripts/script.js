$(document).ready(function () {

	$('a[href^="#"]').on('click', function (e) {

    // remove current active link
    $('nav.home a').each(function () {
      $(this).removeClass('active');
    });

    // add this active link
    $(this).addClass('active');
	});


  $(document).on("scroll", function (event) {
		var $scrollPosition = $(document).scrollTop();
		var $windowHeight = $(window).height();
		var $documentHeight = $(document).height();

		$(".intro").css("opacity", 1 - $scrollPosition / 150);
		$("header").css("opacity", 0 + $scrollPosition / 150);

		$("nav a").each(function () {
			var $currentSection = $(this);
			var $sectionId = $currentSection[0].hash;

			if($scrollPosition + $windowHeight == $documentHeight) {
				$("nav ul li a").removeClass("active");
				$("nav ul li a.portfolio").addClass("active");
		 	}	else if ((($($sectionId).position().top-70) <= $scrollPosition) && (($($sectionId).position().top-70) + $($sectionId).height() > $scrollPosition)) {
				$("nav ul li a").removeClass("active");
				$currentSection.addClass("active");
			}
		});
	});
});
