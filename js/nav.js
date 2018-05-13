$(document).ready(function(e) {
  $("#home-nav").click(function() {
      $('html,body').animate({
          scrollTop: 0},
          'slow');
  });

  $("#skills-nav").click(function() {
      $('html,body').animate({
          scrollTop: $(".style1").offset().top},
          'slow');
  });

  $("#portfolio-nav").click(function() {
      $('html,body').animate({
          scrollTop: $(".style2").offset().top},
          'slow');
  });

  $("#career-nav").click(function() {
      $('html,body').animate({
          scrollTop: $(".style3").offset().top},
          'slow');
  });

  $("#contact-nav").click(function() {
      $('html,body').animate({
          scrollTop: $(".contact").offset().top},
          'slow');
  });
});
