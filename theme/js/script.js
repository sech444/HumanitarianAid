/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */


(function($) {
    "use strict";

    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
    if ($(window).width() < 1024) {
        $(".navbar-menu .has-dropdown").on("click", function(e) {
            $(this).children(".navbar-dropdown").toggle();
        });
    }

    $(".videoplay").modalVideo();
    $(".portfolio-single-slider").slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        } else {
        navbar.classList.remove('scrolled');
        }
    });


    $(".clients-logo").slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(".testimonial-wrap").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    

    $(".gallery-wrap").each(function() {
        $(this)
            .find(".gallery-popup")
            .magnificPopup({
                type: "image",
                gallery: {
                    enabled: true,
                },
            });
    });

    var map;

    function initialize() {
        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(50.97797382271958, -114.107718560791),
            // styles: style_array_here
        };
        map = new google.maps.Map(
            document.getElementById("map-canvas"),
            mapOptions
        );
    }

    var google_map_canvas = $("#map-canvas");

    if (google_map_canvas.length) {
        google.maps.event.addDomListener(window, "load", initialize);
    }

    // Counter

    $(".counter-stat").counterUp({
        delay: 10,
        time: 1000,
    });
})(jQuery);

// Back to top button
(function() {
    // When the user scrolls down 300px from the top of the document, show the button
    window.addEventListener('scroll', function() {
      var backToTop = document.getElementById('back-to-top');
      if (window.pageYOffset > 300) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    });
  
    // When the user clicks on the button, scroll to the top of the document
    document.getElementById('back-to-top').addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  })();