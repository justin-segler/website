$(document).ready(function(e) {
  //First
  $("#portfolio1Link").click(function() {
    if ($('.toggle')[0] !== undefined)
      $('.toggle')[0].style.display = 'none';
    $('#portfolioModal1').removeClass('closed');
    $('#portfolioModal1').scrollTop(0);
    $( "#top" ).css("overflow", "hidden");
    $( "#header" ).fadeTo(200 , 0, function() {
      $('#portfolioModal1').css("overflow-y", "scroll");
      $('#portfolioModal1 .modal-content').css("height", "100%");
      $('#portfolioModal1').animate({top: '0%', opacity: 1}, 500, function() {
        if (window.matchMedia("(max-width: 980px)").matches)
          $('html, body').scrollTop(0);
      });
    });
  });

  $("button#closeModalX1.closeModalX").on('click', function() {
    $('#portfolioModal1').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal1 .modal-content').css("height", 0);
        $('#portfolioModal1').addClass('closed');
        if ($('.toggle')[0] !== undefined)
          $('.toggle')[0].style.display = 'block';
      });
    });
  });

  $("#closeModalButton1").click(function() {
    $('#portfolioModal1').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal1 .modal-content').css("height", 0);
        $('#portfolioModal1').addClass('closed');
        if ($('.toggle')[0] !== undefined)
          $('.toggle')[0].style.display = 'block';
      });
    });
  });

  //Second
  $("#portfolio2Link").click(function() {
    if ($('.toggle')[0] !== undefined)
      $('.toggle')[0].style.display = 'none';
    $('#portfolioModal2').removeClass('closed');
    $('#portfolioModal2').scrollTop(0);
    $( "#top" ).css("overflow", "hidden");
    $( "#header" ).fadeTo(200 , 0, function() {
      $('#portfolioModal2').css("overflow-y", "scroll");
      $('#portfolioModal2 .modal-content').css("height", "100%");
      $('#portfolioModal2').animate({top: '0%', opacity: 1}, 500, function() {
        if (window.matchMedia("(max-width: 980px)").matches)
          $('html, body').scrollTop(0);
      });
    });
  });

  $("#closeModalX2").click(function() {
    $('#portfolioModal2').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal2 .modal-content').css("height", 0);
        $('#portfolioModal2').addClass('closed');
        if ($('.toggle')[0] !== undefined)
          $('.toggle')[0].style.display = 'block';
      });
    });
  });

  $("#closeModalButton2").click(function() {
    $('#portfolioModal2').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal2 .modal-content').css("height", 0);
        $('#portfolioModal2').addClass('closed');
        if ($('.toggle')[0] !== undefined)
          $('.toggle')[0].style.display = 'block';
      });
    });
  });

  //Third
  $("#portfolio3Link").click(function() {
    if ($('.toggle')[0] !== undefined)
      $('.toggle')[0].style.display = 'none';
    $('#portfolioModal3').removeClass('closed');
    $('#portfolioModal3').scrollTop(0);
    $( "#top" ).css("overflow", "hidden");
    $( "#header" ).fadeTo(200 , 0, function() {
      $('#portfolioModal3').css("overflow-y", "scroll");
      $('#portfolioModal3 .modal-content').css("height", "100%");
      $('#portfolioModal3').animate({top: '0%', opacity: 1}, 500, function() {
        if (window.matchMedia("(max-width: 980px)").matches)
          $('html, body').scrollTop(0);
      });
    });
  });

  $("#closeModalX3").click(function() {
    $('#portfolioModal3').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal3 .modal-content').css("height", 0);
        $('#portfolioModal3').addClass('closed');
        if ($('.toggle')[0] !== undefined)
          $('.toggle')[0].style.display = 'block';
      });
    });
  });

  $("#closeModalButton3").click(function() {
    $('#portfolioModal3').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal3 .modal-content').css("height", 0);
        $('#portfolioModal3').addClass('closed');
        if ($('.toggle')[0] !== undefined)
          $('.toggle')[0].style.display = 'block';
      });
    });
  });

  //Fourth
  $("#portfolio4Link").click(function() {
    if ($('.toggle')[0] !== undefined)
      $('.toggle')[0].style.display = 'none';
    $('#portfolioModal4').removeClass('closed');
    $('#portfolioModal4').scrollTop(0);
    $( "#top" ).css("overflow", "hidden");
    $( "#header" ).fadeTo(200 , 0, function() {
      $('#portfolioModal4').css("overflow-y", "scroll");
      $('#portfolioModal4 .modal-content').css("height", "100%");
      $('#portfolioModal4').animate({top: '0%', opacity: 1}, 500, function() {
        if (window.matchMedia("(max-width: 980px)").matches)
          $('html, body').scrollTop(0);
      });
    });
  });

  $("#closeModalX4").click(function() {
    $('#portfolioModal4').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal4 .modal-content').css("height", 0);
        $('#portfolioModal4').addClass('closed');
        if ($('.toggle')[0] !== undefined)
          $('.toggle')[0].style.display = 'block';
      });
    });
  });

  $("#closeModalButton4").click(function() {
    $('#portfolioModal4').animate({top: '-150%', opacity: 0}, 500, function() {
      $( "#header" ).fadeTo(100 , 1, function() {
        $( "#top" ).css("overflow", "scroll");
        $('#portfolioModal4 .modal-content').css("height", 0);
        $('#portfolioModal4').addClass('closed');
        if ($('.toggle')[0] !== undefined)
          $('.toggle')[0].style.display = 'block';
      });
    });
  });
});
