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
            </section>
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
        @include('footer') 
    </body>
</html>