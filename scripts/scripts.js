$(document).ready(function() {
  $('.nav').click(function() {
    $('.nav').toggleClass('visible');
  });

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    
    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 1000, 'swing', function() {
      window.location.hash = target;
    });
  });
});
