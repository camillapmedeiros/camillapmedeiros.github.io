$(function(){
 var shrinkHeader = 300;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
          $('.header').addClass('header__shrink');
          $('.header--title').removeClass('header--title__large');
          $('.header--title').addClass('header--title__small');
        }
        else {
            $('.header').removeClass('header__shrink');
            $('.header--title').removeClass('header--title__small');
            $('.header--title').addClass('header--title__large');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});
