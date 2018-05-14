$(document).ready(() => {
  $("#sendMessageButton").click(function(event){
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = name + "\n" + email + "\n" + phone + "\n\n" + $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages

      Email.send("noreply@justinsegler.com",
        "justin@djsegler.com",
        name,
        message,
        "smtp.elasticemail.com",
        "justin@djsegler.com",
        "0e21dc62-ccbb-47a1-abb3-d83ebbb3c1b7",
        function done(m) {
          event.preventDefault();
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        }
      );

      setTimeout(function() {
        $("#sendMessageButton").prop("disabled", false); // Re-enable submit button when AJAX call is complete
      }, 1000);

      setTimeout(function() {
        $("#success").remove();
      }, 5000);
    });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });

  /*When clicking on Full hide fail/success boxes */
  $('#name').focus(function() {
    $('#success').html('');
  });
});
