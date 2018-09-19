
$(document).ready(function(){
    var height = window.innerHeight;

    $(window).scroll(function() {
        event.preventDefault();
        if (window.scrollY >= height){
            $('#header').show();
        } else {
            $('#header').hide();
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    $('.navigation__link, .header__link').click(function(event) {
        event.preventDefault();
        newLocation = this.href;
        $('body').fadeOut(800, newpage);
    });
    function newpage() {
        window.location = newLocation;
    }

  $('.arrow a').click(function(event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
