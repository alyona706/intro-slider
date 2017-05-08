;(function($){
	'use strict';
	$(window).on('load', function() {
		$('.ba-slider').slick({
			dots: true,
			prevArrow: $('.ba-arrow__prev'),
			nextArrow: $('.ba-arrow__next'),
			slidesToShow: 1,
		});
	});
	
})(jQuery);