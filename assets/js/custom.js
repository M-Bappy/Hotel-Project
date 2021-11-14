$(document).ready(function() {
    "use strict";

    $(document).scroll(function() {
        let scrollVal = $(this).scrollTop();
        if (scrollVal > 200) {
            $('.scroll-top-btn').fadeIn();
        } else {
            $('.scroll-top-btn').fadeOut();
        }
    })

    // click to top up========

    $('.scroll-top-btn').click(function() {
        $('html').animate({
            scrollTop: 0,
        })
    })

    // preloder========

    $(document).ready(function() {
        $('.preloder').fadeOut();
    })
});