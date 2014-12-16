/* global Snap */
/* global $ */

var portfolio_ab = (function () {
    'use strict';

    var conf = {
        navHeight: '80',
        svgDir: '/assets/svg/'
    };

    var mediaQueries = {};
    mediaQueries.screen = 'only screen';
    mediaQueries = {
        screen: mediaQueries.screen,
        mediumUp: mediaQueries.screen + ' and (min-width:40.063em)',
        largeUp: mediaQueries.screen + ' and (min-width:64.063em)',
        xlargeUp: mediaQueries.screen + ' and (min-width:90.063em)',
        xxlargeUp: mediaQueries.screen + ' and (min-width:120.063em)'
    };    

    function loadSvg(id) {
        var svgSelector = '#' + id + ' .svg-header' ;
        var svg = new Snap(svgSelector);
        var urlSvg = conf.svgDir + $(svgSelector).data('url') + '.svg';

        Snap.load(urlSvg, function(f) {
            var header = f.select('#' + id);
            svg.append(header);
        });
    }

    function scrollToWithSelector(selector) {

        var scroll = $(selector).offset().top;
        if(window.matchMedia(mediaQueries.mediumUp).matches) {
            scroll = $(selector).offset().top - conf.navHeight;
        }
        
        $('html, body').animate({ scrollTop: scroll }, 'slow');
    }

    var landing = (function () {

        function resizeLanding() {
            var windowHeight = $(window).height();
            $('.landing-home').css('height', windowHeight);
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
            $('.profile-picture').click(scrollLanding);
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
            $('.main-content').waypoint(function(){
                $('.navbar.top').toggleClass('background-on');
                $('.hamburger').toggleClass('dark');
            }, {offset : conf.navHeight} );
        }

        function bind() {
            $('.navbar a').click(function(e){
                e.preventDefault();
                $('.wrapper').removeClass('animate');
                $('.hamburger').removeClass('animate');
                $('body').removeClass('menu-open');
                var id = $(this).attr('href');
                scrollToWithSelector(id);
            });

            $('.hamburger').click(function(e){
                e.preventDefault();
                $('.wrapper').removeClass('animate');
                $('.wrapper').addClass('animate');
                $('.hamburger').removeClass('animate');
                $('.hamburger').addClass('animate');

                if($('body').hasClass('menu-open'))
                {
                    $('body').removeClass('menu-open');
                } else {
                    $('body').addClass('menu-open');
                    $('.wrapper').one('click', function(){
                        $('body').removeClass('menu-open');
                    });
                }

            });
        }

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
    'use strict';
    portfolio_ab.start();
});