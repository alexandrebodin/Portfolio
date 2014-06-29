var sp4c3B1rd = (function () {
    "use strict";

    var conf = {
        navHeight: '80',
        svgDir: '/assets/svg/'
    }

    function loadSvg(id) {
        var svgSelector = '#' + id + ' .svg-header' ;
        var svg = Snap(svgSelector);
        var urlSvg = conf.svgDir + $(svgSelector).data('url') + '.svg';

        Snap.load(urlSvg, function(f) {
            var header = f.select('#' + id);
            svg.append(header);
        });
    };

    function scrollToWithSelector(selector) {
        var scroll = $(selector).offset().top - conf.navHeight;
        $('html, body').animate({ scrollTop: scroll }, "slow");
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
            scrollToWithSelector('.main-content');
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
                $('.navbar.top').toggleClass("background-on");
            }, {offset : conf.navHeight} );
        }

        function bind() {
            $('.navbar a').click(function(e){
                e.preventDefault();
                console.log('cc');
                var id = $(this).attr('href');
                scrollToWithSelector(id);
            })
        };

        function initFunction() {
            bind();
            waypoints();
        }

        return {
            init: initFunction
        };

    }());

    var whoIAm = (function () {

        function initFunction() {
            loadSvg('whoiam');
        }

        return {
            init: initFunction
        };

    }());

    var sections = [landing, nav, whoIAm];

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