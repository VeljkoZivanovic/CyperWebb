(function ($) {
    "use strict";

    $(document).ready(function () {

        //01. Smooth Scroll Initialize
        function smoothScroolInit() {
            $('.back-to-top').smoothScroll({
                speed: 1000
            });
        }
        smoothScroolInit();

        //02. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 80) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();

        //03 Show or hide the sticky footer button
        $(window).on('scroll', function (event) {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200);
            } else {
                $('.back-to-top').fadeOut(200);
            }
        });

        //04. Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        //05. Hamburger-menu
        $('.hamberger_menu, #menu li a').on('click', function () {
            $('#menu').toggleClass('open');
        });




    });

})(jQuery);