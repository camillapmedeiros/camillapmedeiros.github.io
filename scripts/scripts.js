$(function(){
    var shrinkHeader = 75;
    $(window).scroll(function() {
        var scroll = getCurrentScroll();
          if ( scroll >= shrinkHeader ) {
                $('.header').addClass('header--shrink');
                $('.header__title').removeClass('header__title--large').addClass('header__title--small');
            }
            else {
                $('.header').removeClass('header--shrink');
                $('.header__title').removeClass('header__title--small').addClass('header__title--large');
            }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
        }
});
