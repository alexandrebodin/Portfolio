<!DOCTYPE html>
<html lang="{{ App::getLocale() }}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <title>Alexandre BODIN</title>
        {{ HTML::style('assets/css/app.css') }}
    </head>
    <body>
        @include('svg-icons-portfolio')
        @include('header')
        <div href="#menu" class="hamburger">
        </div>
        <section class="wrapper">
            <section id="landing" class="landing-home">
            <div class="landing-overlay">
                <div class="profile-picture">
                    <a class="profile-picture-link">
                        {{ HTML::image('assets/images/profile-photo.jpeg', 'profile_picture' , array('class' => 'profile-img')) }}
                    </a>
                </div>
                <div class="landing-content">
                    <h1>Alexandre BODIN</h1>
                    <p class="pro-status">{{ trans('messages.profesionnal-status') }}</p>
                    <p class="landing-message">{{ trans('messages.landing-message') }}</p>
                </div>
            </div>
            <div class="landing-arrows">
                <svg width="21.18px" height="20.78px" viewBox="0 0 21.18 20.78">
                    <use xlink:href="#arrows"></use>
                </svg>
            </div>
            </section>
            <section class="main-content">
                <section id="whoiam">
                    <div class="row">
                        <header>
                            <svg width="82.15px" height="82.4px" viewBox="0 0 82.15 82.4" class="svg-header" data-url="who-i-am" ></svg>
                            <h2>{{ trans('messages.whoiam') }}</h2>
                        </header>
                        <section class="content">
                            <div class="large-6 small-12 columns left">
                                <p>
                                    {{ trans('messages.text.whoiam') }}
                                </p>
                            </div>
                            <div class="large-6 small-12 columns right">

                            </div>
                        </section>
                    </div>
                </section>
                <section id="whatido">
                </section>
                <section id="mywork">
                </section>
                <section id="contactme">
                    <from>
                        <fieldset>
                            <label for="email">Email</label>
                            <input type="text" id="email" name="contact[email]">
                        </fieldset>
                        <fieldset>
                            <label for="email">Email</label>
                            <input type="text" id="email" name="contact[email]">
                        </fieldset>
                    </from>
                </section>
            </section>
        </section>
        @include('footer')

        @section('scripts')
            {{ HTML::script('assets/js/vendor/jquery.min.js') }}
            {{ HTML::script('assets/js/vendor/waypoints.min.js') }}
            {{ HTML::script('assets/js/vendor/snap.min.js') }}
            {{ HTML::script('assets/js/app.min.js') }}
        @show
    </body>
</html>