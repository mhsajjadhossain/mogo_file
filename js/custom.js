$(function () {

    //    sticky menu
    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".nav_menu").removeClass("sticky");
        } else {
            $(".nav_menu").addClass("sticky");
        }
    });

    //    SmoothScroll

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 300
    });


    /* counter start*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    /* slider*/
    $('.warp').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        nextArrow: '.right_arrow',
        prevArrow: '.left_arrow'
    });
    /* venobox*/
    $('.venobox').venobox({

        framewidth: '300px',
        spinner: 'wave'
    });
    //==== Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //==== Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    //    preloader
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


});
