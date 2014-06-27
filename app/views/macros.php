<?php

HTML::macro('navSvgIcon', function($svgId)
{
    return '<svg viewbox="0 0 25.5 20" height="20" class="nav-svg-icon">
                <use xlink:href="#'.$svgId.'"></use>
            </svg>';
});