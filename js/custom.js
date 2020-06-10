/*global $ */
(function($) {
    "use strict";

    // Loader
    $(window).on('load', function () {
        $('.loader').fadeOut(500, function () {
            $(this).remove();
        });      
    });

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

    // list active
    $('.projects-filter-list a').click(function(e){
        e.preventDefault();
        $('.projects-filter-list a').removeClass('active');
        $(this).addClass('active');
    });
  
    // Tab List With Mixer 
    $('.filter-content').each(function(i) {
		let parentSelector = '.filter-content-' + (i + 1)
		let btnsSelector = '.filter-' + (i + 1)
        $(parentSelector).mixItUp({
            selectors: {
                filter: btnsSelector,
                target: '.col-12'
            }
        });
    });

    // INPUT FOCUS ANIMATION 
    $('.field .form-control').focus(function(){
        $(this).parent('.field').addClass('focused');
    });

    $('.field .form-control').each(function() { 
        if ($(this).val() != "") {
            $(this).parent('.field').addClass('focused');   
        }
    });

    $('.field .form-control').focusout(function(){
        if($(this).val() === "")
        $(this).parent('.field').removeClass('focused');
    });

   
})(jQuery);

