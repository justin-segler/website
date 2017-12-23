$(document).ready(function(e) {
  //First
  $("#portfolio1Link").click(function() {
    $('#portfolioModal1').removeClass('closed');
    $('#portfolioModal1').scrollTop(0);
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
        $('#portfolioModal1').addClass('closed');
      });
    });
  });

  $("#closeModalButton1").click(function() {
    $('#portfolioModal1').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal1 .modal-content').css("height", 0);
        $('#portfolioModal1').addClass('closed');
      });
    });
  });

  //Second
  $("#portfolio2Link").click(function() {
    $('#portfolioModal2').removeClass('closed');
    $('#portfolioModal2').scrollTop(0);
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
        $('#portfolioModal2').addClass('closed');
      });
    });
  });

  $("#closeModalButton2").click(function() {
    $('#portfolioModal2').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal2 .modal-content').css("height", 0);
        $('#portfolioModal2').addClass('closed');
      });
    });
  });

  //Third
  $("#portfolio3Link").click(function() {
    $('#portfolioModal3').removeClass('closed');
    $('#portfolioModal3').scrollTop(0);
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
        $('#portfolioModal3').addClass('closed');
      });
    });
  });

  $("#closeModalButton3").click(function() {
    $('#portfolioModal3').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal3 .modal-content').css("height", 0);
        $('#portfolioModal3').addClass('closed');
      });
    });
  });

  //Fourth
  $("#portfolio4Link").click(function() {
    $('#portfolioModal4').removeClass('closed');
    $('#portfolioModal4').scrollTop(0);
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
        $('#portfolioModal4').addClass('closed');
      });
    });
  });

  $("#closeModalButton4").click(function() {
    $('#portfolioModal4').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal4 .modal-content').css("height", 0);
        $('#portfolioModal4').addClass('closed');
      });
    });
  });
});
