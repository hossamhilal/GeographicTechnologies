/*global $ */
(function($) {
    "use strict";

    // OPEN SIDE  MENU 
    $('.menu-btn').on('click', function(){
        $('.nav-menu ').toggleClass('show');
        $('.nav-overlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.nav-overlay').on('click', function(){
        $(this).removeClass('show');
        $('.nav-menu ').removeClass('show');  
        $('body').removeClass('stopScroll');  
    });

    // Show Numbers 
    if( $(window).width() < 768 ){
        $(window).click(function(){
            $('.header-top .numbers span').hide();
        });
        $('.header-top .numbers img').on('click', function(e){
            e.stopPropagation();
            $(this).parent('.numbers').find('span').toggle();
        });
    }

    // Tabs 
    $('.tabs-list a').click(function (e) {
        e.preventDefault();

        $('.tabs-list a').removeClass('active');
        $(this).addClass('active');
        
        var itemId = $(this).attr("href"); 
        $('.tab-content').removeClass('active'); 
        $(itemId).addClass('active');  
    });

    // iniat WOW Js
    new WOW().init();
    
    // MIX IT UP FILTER
    // var mixer = mixitup('.projects-filter-content', {
    //     selectors: {
    //         control: '[data-mixitup-control]',
    //         target: '.col-12'
    //     },
    //     animation: {
    //         duration: 400
    //     }
    // });

    $('.projects-filter-list a').click(function(e){
        e.preventDefault();
        $('.projects-filter-list a').removeClass('active');
        $(this).addClass('active');
    });

    // Counter 
    var a = 0;
    $(window).scroll(function() {
        var oTop = ($('.statistics').offset().top) - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
            a = 1;
        }
    });

    
    // // Tab List With Mixer 

    $('.filter-content').each(function(i) {
		let parentSelector = '.filter-content-' + (i + 1)
		let btnsSelector = '.filter-' + (i + 1)
        $(parentSelector).mixItUp({
                selectors: {
                    filter: btnsSelector
                }
        });
	});


    
  

    

    


    // INPUT FOCUS ANIMATION 
    // $('.inputField .form-control').focus(function(){
    //     $(this).parent('.inputField').addClass('focused');
    // });

    // $('.inputField .form-control').each(function() { 
    //     if ($(this).val() != "") {
    //         $(this).parent('.inputField').addClass('focused');   
    //     }
    // });

    // $('.inputField .form-control').focusout(function(){
    //     if($(this).val() === "")
    //     $(this).parent('.inputField').removeClass('focused');
    // });



    // STOP DEFULT FOR MIXITUP FILTER ANCHOR  
    // $('.portfolioFilterList a').click(function(e){
    //     e.preventDefault();
    //     $('.portfolioFilterList a').removeClass('active');
    //     $(this).addClass('active');
    // });

    // // MIX IT UP FILTER 
    // var mixer = mixitup('.portfolioFilterContent', {
    //     selectors: {
    //         target: '.col-12'
    //     },
    //     animation: {
    //         duration: 400
    //     }
    // });

   
})(jQuery);

