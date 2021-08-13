// @ts-nocheck
/*global $, alert, console*/
$(document).ready(function() {
    "use strict";

    //services active class
    //add act on hover
    $(".services .ser-content").mouseover(function() {
        $(".services .ser-content").removeClass("act");
        $(this).addClass("act");
    });
    // remove add on leave
    $(".services .ser-content").mouseleave(function() {
        $(this).removeClass("act");
    });

    $(".navbar .nav-item").mouseover(function() {
        $(".navbar .nav-item").removeClass("line");
        $(this).addClass("line");
    });

    $(".navbar .nav-item").mouseleave(function() {
        $(this).removeClass("line");
    });

    $(".projects .content").mouseover(function() {
        $(".projects .content").removeClass("opa");
        $(this).addClass("opa");
    });

    $(".projects .content").mouseleave(function() {
        $(this).removeClass("opa");
    });





    //navBAckground
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 150) {
            $(".navbar").addClass("background");
            $(".upper-nav").addClass("background");
        } else {
            $(".navbar").removeClass("background");
            $(".upper-nav").removeClass("background");
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 150) {
            $(".navbar").css({
                top: 0,
            });
            $(".upper-nav").fadeOut();
        } else {
            $(".navbar").css({
                top: "54px",
            });
            $(".upper-nav").fadeIn()
        }
    });

    $('.slider .arrow-down').click(function() {

        $('body, html').animate({

            scrollTop: $('.services').offset().top
        }, 800);

    });


    $('.toggle-list').click(function() {
        $('.uni i').toggleClass('fa-chevron-up   fa-chevron-down ')
        $('.collapseed').slideToggle()
    })


    $(".navbar-nav .nav-link").click(function() {
        //$(this).parent().addClass("act").siblings().removeClass("act");
        $("body, html").animate({
                // scrollTop = divId.offset().top
                scrollTop: $("#" + $(this).data("target")).offset().top -
                    $(".navbar").innerHeight(),
            },
            700
        );
    });
    $(".navbar-nav .nav-link").click(function() {
        $('.nav-item').removeClass('active')
        $(this).parent().addClass('active')

    });
});