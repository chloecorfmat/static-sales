document.addEventListener('DOMContentLoaded', function () {
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

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll(".switcher__item").forEach(function(element) {
        element.addEventListener('click', function() {
            // event handler code
            document.querySelectorAll(".switcher__item--active").forEach(function(element) {
                element.classList.remove('switcher__item--active');
            });

            this.classList.add('switcher__item--active');

            if (this.dataset.foldable === "true") {
                document.querySelectorAll(".cards-item__content--unfold").forEach(function (element) {
                    element.setAttribute('aria-hidden', 'true');
                });
            } else {
                document.querySelectorAll(".cards-item__content--unfold").forEach(function (element) {
                    element.setAttribute('aria-hidden', 'false');
                });
            }

        });
    });
});