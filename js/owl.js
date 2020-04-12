/*global $ */
(function ($) {
    "use strict";

    // Header OWL 
    $('.owl-header').owlCarousel({
        margin: 0,
        autoplay: true,
        loop: true,
        nav: false,
        dots: true,
        navText: ["<i class='icofont-long-arrow-right'></i>", "<i class='icofont-long-arrow-left'></i>"],
        responsive: {
            0: {
                items: 1,
                dotsEach: 1
            },
            600: {
                items: 1,
                dotsEach: 1
            },
            1000: {
                items: 1,
                dotsEach: 1
            }
        }
    });

    $('.owl-header .owl-dot').each(function () {
        $(this).children('span').text('0' + ($(this).index() + 1));
    });
    var owl = $('.owl-header');
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });


    // Services OWL 
    $('.owl-services').owlCarousel({
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<i class='icofont-simple-right'></i>", "<i class='icofont-simple-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    
    // RELATED POSTS OWL 
    $('.owl-clients').owlCarousel({
        margin: 15,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });


})(jQuery);

