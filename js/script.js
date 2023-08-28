window.addEventListener('load', function () {
    document.getElementById('js--header-burger__button').addEventListener('click', toggleHeaderBurger);
    function toggleHeaderBurger() {
        document.getElementById('js--header-burger__button--open').classList.toggle('header-banner__burger--open-selected');
        document.getElementById('js--header-burger__button--open').classList.toggle('header-banner__burger--open');
        document.getElementById('js--header-burger__button--close').classList.toggle('header-banner__burger--close-selected');
        document.getElementById('js--header-burger__button--close').classList.toggle('header-banner__burger--close');

        document.getElementById('js--header-nav').classList.toggle('header-nav');
        document.getElementById('js--header-nav').classList.toggle('header-nav--show');
        document.getElementById('js--header-social').classList.toggle('header-social');
        document.getElementById('js--header-social').classList.toggle('header-social--show');
    }
});

