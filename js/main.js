$(document).ready(function() {

	let $header = $('header');
	let $sticky = $header.before($header.clone().addClass("sticky"));

	(function($) {
		$(window).on("scroll", function(){
			let scrollFromTop = $(window).scrollTop();
			$("body").toggleClass("scroll", (scrollFromTop > 350));
		});

		//SMOOTH SCROLL
		$('.menu li a[href^="#"]').on('click', function(e){
			e.preventDefault();

			let target = $(this.hash);

			if (target.length) {
				$('html, body').stop().animate({
					scrollTop: target.offset().top -60
				}, 1000);
			}

		});
	})(jQuery);

	// MASONRY
	(function($) {
		$('.grid').masonry({
			//options
			itemSelector: '.grid-item',
			columnWidth: 120,
			fitWidth: true,
			gutter: 0
		});

		// RESPONSIVE MENU START
		let body = $('body');
		let menuTrigger = $('.js-menu-trigger');
		let mainOverlay = $('.js-main-overlay');

		menuTrigger.on('click', function(){
			body.addClass('menu-is-active');
		});

		mainOverlay.on('click', function(){
			body.removeClass('menu-is-active');
		});

		$('.menu li a').on('click', function(){
			$('body').removeClass("menu-is-active");
		});
	})(jQuery);

	// ABOUT ME
	let lang = {
		"html": "100%",
		"css": "90%",
		"javascript": "65%",
		"php": "80%",
		"react": "65%",
		"java": "55%",
		"git": "70%"
	};

	let multiply = 4;

	$.each( lang, function( language, pourcent) {

		let delay = 700;

		setTimeout(function() {
			$('#'+language+'-pourcent').html(pourcent);
		},delay*multiply);

		multiply++;

	});
});
