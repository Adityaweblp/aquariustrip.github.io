


jQuery(function ($) {

    "use strict";
    /* ===================================
           Header appear
        ====================================== */
   
$(".over-nev .nav-link").on("click", function () {
$(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
setTimeout(function(){
	$(".side-menu").addClass("side-menu-opacity");
}, 500)
});


/* ===================================
	Side Menu
====================================== */
if ($("#sidemenu_toggle").length) {
	$("#sidemenu_toggle").on("click", function () {
		$(".side-menu").removeClass("side-menu-opacity");
		$(".pushwrap").toggleClass("active");
		$(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
	}), $("#close_side_menu").on("click", function () {
		$(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
		setTimeout(function(){
			$(".side-menu").addClass("side-menu-opacity");
		}, 500);
	}), $(".side-nav .navbar-nav .nav-link").on("click", function () {
		$(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
		setTimeout(function(){
			$(".side-menu").addClass("side-menu-opacity");
		}, 500);
	}), $("#btn_sideNavClose").on("click", function () {
		$(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
		setTimeout(function(){
			$(".side-menu").addClass("side-menu-opacity");
		}, 500);
	}), $('.side-nav .navbar-nav > li > span').click(function() {
		$(this).parent().find('.dd').slideToggle();
		return false; 
	});
}
})
/**
   * Clients Slider
   */



$(document).ready(function(){
    <!--Smooth Page Scroll to Top-->
      $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
          $('.scrollup').fadeIn();
        } else {
          $('.scrollup').fadeOut();
        }
      }); 
   
      $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
      });
    <!--//-->
    
  });



jQuery(document).ready(function($) {

/*
|--------------------------------------------------------------------------
| Global myTheme Obj / Variable Declaration
|--------------------------------------------------------------------------
|
|
|
*/

    var myTheme = window.myTheme || {},
    $win = $( window );
    

/*
|--------------------------------------------------------------------------
| Functions Initializers
|--------------------------------------------------------------------------
|
|
|
*/
    myTheme.Isotope();
    
});
 /*----------- 15. WOW.js Animation ----------*/
 new WOW().init();

(jQuery);

(function() {
  "use strict";
  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()


$('.contact-btn').bind('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.contact-form').animate({
        left: '-450px'
      });
    } else {
      $('.contact-form').animate({
        left: '0'
      });
      $(this).addClass('active');
    }
  });
  $('.close-btn').bind('click', function () {
    $('.contact-form').animate({
      left: '-450px'
    });
  });

$(window).scroll(function() {
  var sticky = $('.fixed-hedder'),
    scroll = $(window).scrollTop();

  if (scroll >= 40) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

  
  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'arrow',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
   new Swiper('.testimonial-slider1', {
    speed: 300,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'arrow',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });

