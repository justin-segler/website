$(document).ready(function(e) {
  //First
  $("#portfolio1Link").click(function() {
    $( "#top" ).css("overflow", "hidden");
    $( "#header" ).fadeTo(200 , 0, function() {
      $('#portfolioModal1').css("overflow-y", "scroll");
      $('#portfolioModal1 .modal-content').css("height", "100%");
      $('#portfolioModal1').animate({top: '0%', opacity: 1}, 500, function() {});
    });
  });

  $("button#closeModalX1.closeModalX").on('click', function() {
    $('#portfolioModal1').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal1 .modal-content').css("height", 0);
      });
    });
  });

  $("#closeModalButton1").click(function() {
    $('#portfolioModal1').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal1 .modal-content').css("height", 0);
      });
    });
  });

  //Second
  $("#portfolio2Link").click(function() {
    $( "#top" ).css("overflow", "hidden");
    $( "#header" ).fadeTo(200 , 0, function() {
      $('#portfolioModal2').css("overflow-y", "scroll");
      $('#portfolioModal2 .modal-content').css("height", "100%");
      $('#portfolioModal2').animate({top: '0%', opacity: 1}, 500, function() {});
    });
  });

  $("#closeModalX2").click(function() {
    $('#portfolioModal2').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal2 .modal-content').css("height", 0);
      });
    });
  });

  $("#closeModalButton2").click(function() {
    $('#portfolioModal2').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal2 .modal-content').css("height", 0);
      });
    });
  });

  //Third
  $("#portfolio3Link").click(function() {
    $( "#top" ).css("overflow", "hidden");
    $( "#header" ).fadeTo(200 , 0, function() {
      $('#portfolioModal3').css("overflow-y", "scroll");
      $('#portfolioModal3 .modal-content').css("height", "100%");
      $('#portfolioModal3').animate({top: '0%', opacity: 1}, 500, function() {});
    });
  });

  $("#closeModalX3").click(function() {
    $('#portfolioModal3').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal3 .modal-content').css("height", 0);
      });
    });
  });

  $("#closeModalButton3").click(function() {
    $('#portfolioModal3').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal3 .modal-content').css("height", 0);
      });
    });
  });

  //Fourth
  $("#portfolio4Link").click(function() {
    $( "#top" ).css("overflow", "hidden");
    $( "#header" ).fadeTo(200 , 0, function() {
      $('#portfolioModal4').css("overflow-y", "scroll");
      $('#portfolioModal4 .modal-content').css("height", "100%");
      $('#portfolioModal4').animate({top: '0%', opacity: 1}, 500, function() {});
    });
  });

  $("#closeModalX4").click(function() {
    $('#portfolioModal4').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal4 .modal-content').css("height", 0);
      });
    });
  });

  $("#closeModalButton4").click(function() {
    $('#portfolioModal4').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal4 .modal-content').css("height", 0);
      });
    });
  });
});
