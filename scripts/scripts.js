
$(document).ready(function(){
    var shrinkHeader = 75;
    $(window).scroll(function() {
        if ($(window).width() >= 768){
            var scroll = getCurrentScroll();
            if ( scroll >= shrinkHeader ) {
                $('.header').addClass('header--shrink');
                $('.header__title').addClass('header__title--small');
            }
            else {
                $('.header').removeClass('header--shrink');
                $('.header__title').removeClass('header__title--small');
            }
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});

$(document).ready(function() {
    $('.navigation__link, .header__link').click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(800, newpage);
    });
    function newpage() {
        window.location = newLocation;
    }
});
