<!DOCTYPE html>
<html lang="{{ App::getLocale() }}">
    <head>
        <meta charset="UTF-8">
        <title>Alexandre BODIN</title>
        {{ HTML::style('assets/css/app.min.css') }}
    </head>
    <body>
        @include('svg-icons-portfolio')
        @include('header')
        <section class="wrapper">
            <section class="landing-home">
            <div class="landing-overlay">
                <div class="profile-picture">
                    <a class="profile-picture-link">
                        {{ HTML::image('assets/images/profile-photo.jpeg', 'profile_picture' , array('class' => 'profile-img')) }}
                    </a>
                </div>
                <div class="landing-content">
                    <h1>Alexandre BODIN</h1>
                    <p>{{ trans('messages.profesionnal-status') }}</p>
                    <p>{{ trans('messages.landing-message') }}</p>
                </div>
            </div>
            <div class="landing-arrows">
                <svg width="21.18px" height="20.78px" viewBox="0 0 21.18 20.78">
                    <use xlink:href="#arrows"></use>
                </svg>
            </div>
            </section>
            <section class="main-content">
                <section class="who-i-am">
                </section>
                <section class="what-i-do">
                </section>
                <section class="my-work">
                </section>
                <section class="contact-me">
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
            {{ HTML::script('assets/js/app.min.js') }}
        @show
    </body>
</html>