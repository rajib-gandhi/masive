/*
|--------------------------------------------------------------------------
| Bullete app Template Main JS
|--------------------------------------------------------------------------
*/
document.addEventListener("touchstart", function() {},false);
(function ($) {
	"use strict";
	var windw = $(window);
	

	//Testimonial Carousel single column
	$('#gallery .owl-carousel').owlCarousel({
	   items: 1,
	   autoplay: false,
	   margin: 30,
	   loop: true,
	   nav: false,
	   navText: ["&#10094;", "&#10095;"]
	});
	
/*
|--------------------------------------------------------------------------
| CountUp
|--------------------------------------------------------------------------
*/
	$('.counter').counterUp({
		delay: 5,
		time: 1000
	});


/*
|--------------------------------------------------------------------------
| ACTIVE STICKY HEADER
|--------------------------------------------------------------------------
*/	
	jQuery("document").ready(function($){
	
		var nav = $('.top-header');
		
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				nav.addClass("menu-bg");
			} else {
				nav.removeClass("menu-bg");
			}
		});
	 
	});	
	
	
	
	
/*
|--------------------------------------------------------------------------
| Smoth Scroll
|--------------------------------------------------------------------------
*/
	$(document).on('click', 'a[href*="#"]:not([href="#"])', function(event){
	  if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		
		var topBar_height = $('.TopBar').outerHeight() - 3;
		if(!topBar_height)
			topBar_height = 0;
		
		var header_height = 50 + topBar_height;
		
		if (target.length) {
		  $('html, body').animate({
			scrollTop: target.offset().top - header_height
		  }, 1000);
		  return false;
		}
	  }
	});



	

/*
|--------------------------------------------------------------------------
| Scrollup
|--------------------------------------------------------------------------
*/
	var scrollup = $('.scrollup');
	windw.scroll(function () {
		if ($(this).scrollTop() > 100) {
			scrollup.fadeIn();
		} else {
			scrollup.fadeOut();
		}
	});
	scrollup.on('click', '', function(event){
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});

})(jQuery);

	
	
/*
|--------------------------------------------------------------------------
| End
|--------------------------------------------------------------------------
*/






