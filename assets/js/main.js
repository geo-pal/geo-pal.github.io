/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 500,
			offset: function() { return $nav.height(); }
		});

	//slider
	$(document).on('click', function (e) {
		if ($(e.target).closest(".menu-btn").length === 0) {
			$('.menu-nav').removeClass('menu-nav--open');
		}
	});
	
	$('.menu-btn').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('menu-btn--open');
		$('.menu-nav').toggleClass('menu-nav--open');
	});
	
	$('.menu-nav__link').on('click', function(e){
	  $("#main-btn-img").attr('src', $(this).find('img').attr('src'));
	});

})(jQuery);