<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
    $loc = Config::get('app.fallback_locale');
    return Redirect::to($loc.'/');
});

$default_locale = Config::get('app.fallback_locale');

$locale = Request::segment(1);
$locale = empty($locale) ? $default_locale : $locale;

if(in_array($locale, array('fr', 'en')))
{
    App::setLocale($locale);
}
else
{
    $locale = $default_locale;
    App::setLocale($locale);
}

Route::group(array('prefix' => $locale), function()
{
    Route::get('/', array('as' => 'home' , function()
    {
        return View::make('layout');
    }));
});