var sp4c3B1rd = (function () {
    "use strict";

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

        function initFunction() {
            resize();
        }

        return {
            init: initFunction
        };

    }());

    var sections = [landing];

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