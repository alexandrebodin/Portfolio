<header class="navbar top">
    <div class="row">
        <nav class="top-nav">
            <a href="#whoiam">
                {{ HTML::navSvgIcon('who-i-am')}}
                <span class="nav-link">{{ trans('messages.whoiam') }}</span>
            </a>
            <a href="#whatido">
                {{ HTML::navSvgIcon('what-i-do')}}
                <span class="nav-link">{{ trans('messages.whatido') }}</span>
            </a>
            <a href="#mywork">
                {{ HTML::navSvgIcon('my-work')}}
                <span class="nav-link">{{ trans('messages.mywork') }}</span>
            </a>
            <a href="#contactme">
                {{ HTML::navSvgIcon('contact-me')}}
                <span class="nav-link">{{ trans('messages.contactme') }}</span>
            </a>
        </nav>
    </div>
</header>