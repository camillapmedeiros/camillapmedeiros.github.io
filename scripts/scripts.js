$("header--trigger__medium").click(function() {
  $('.header--full').toggleClass('.header--medium');
});

$("header--trigger__small").click(function() {
  $('.header--medium').toggleClass('.header--small');
});

$("header--trigger__shadow").click(function() {
  $('.header--small').toggleClass('.header--shadow');
});
