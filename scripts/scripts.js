
$(document).ready(function(){
    var height = window.innerHeight;

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

    $(window).scroll(function() {
        event.preventDefault();
        if (window.scrollY >= height){
            $('#header').fadeIn();
        } else {
            $('#header').fadeOut();
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    $(window).scroll(function() {
        event.preventDefault();
        if (window.scrollY >= 200){
            $('.header--fixed').css("box-shadow", "0 1px 3px rgba(0,0,0,.08)");
        } else {
            $('.header--fixed').css("box-shadow", "none");
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

});
