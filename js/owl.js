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
        dots: false,
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

    
    // preview Owl
    var previewOwl = $('#gallery-review'),
        thumbsOwl  = $('#gallery-thumbs'),
        syncedSecondary = true;

    previewOwl.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        dots: false,
        responsiveRefreshRate: 200,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"]
    })
    .on("changed.owl.carousel", syncPosition);

    // Thumbnails owl 
    thumbsOwl
        .on("initialized.owl.carousel", function () {
            thumbsOwl
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 6,
            dots: true,
            margin:10,
            nav: true,
            navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
            smartSpeed: 2000,
            slideSpeed: 2000,
            slideBy: 4,
            responsiveRefreshRate: 100,
            responsive: {
                0: {
                    items: 2
                },
                400: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //to this
        thumbsOwl
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");

        var onscreen = thumbsOwl.find(".owl-item.active").length - 1;

        var start = thumbsOwl
            .find(".owl-item.active")
            .first()
            .index();

        var end = thumbsOwl
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbsOwl.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbsOwl.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            previewOwl.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbsOwl.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        previewOwl.data("owl.carousel").to(number, 300, true);
    });


    // Project Equipment Owl
    $('.owl-project-equipment').owlCarousel({
        margin: 15,
        autoplay: true,
        loop: true,
        nav: true,
        dots: false,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


})(jQuery);

