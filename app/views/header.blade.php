<header class="navbar top">
    <div class="row">
        <nav class="top-nav">
            <a href="#whoiam">
                {{ HTML::navSvgIcon('who-i-am')}}
                {{ trans('messages.whoiam') }}
            </a>
            <a href="#whatido">
                {{ HTML::navSvgIcon('what-i-do')}}    
                {{ trans('messages.whatido') }}
            </a>
            <a href="#mywork">
                {{ HTML::navSvgIcon('my-work')}}
                {{ trans('messages.mywork') }}
            </a>
            <a href="#contactme">
                {{ HTML::navSvgIcon('contact-me')}}
                {{ trans('messages.contactme') }}
            </a>
        </nav>
    </div>
</header>