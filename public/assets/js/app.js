var sp4c3B1rd = (function () {
    "use strict";

    var conf = {
        navHeight: '80px'
    }
    var landing = (function () {

        function resizeLanding() {
            var windowHeight = $(window).height();
            if (matchMedia('(min-width: 40em)').matches) {
                $('.landing-home').css('height', windowHeight);
                $('.main-content').css('margin-top', windowHeight);
            } else {
                $('.landing, .main-content').attr('style', '');
            }
        }

        function resize() {
            resizeLanding();
            $(window).resize(resizeLanding);
        }

        function scrollLanding() {
            console.log('scroll');
            $('html, body').animate({ scrollTop: $('.main-content').offset().top}, "slow");
        }

        function bind() {
            $('.landing-arrows').click(scrollLanding);
        }

        function initFunction() {
            resize();
            bind();
        }

        return {
            init: initFunction
        };

    }());

    var nav = (function () {

        function waypoints() {
            $(".main-content").waypoint(function(){
                console.log('c');
                $('.navbar.top').toggleClass("background-on");
            }, {offset : conf.navHeight} );
        }

        function initFunction() {
            console.log('c');
            waypoints();
        }

        return {
            init: initFunction
        };

    }());

    var sections = [landing, nav];

    function init() {
        var i;
        for (i = 0; i < sections.length; i++) {
            sections[i].init();
        }
    }

    return {
        start : init
    };

}());

$(function () {
    "use strict";
    sp4c3B1rd.start();
});