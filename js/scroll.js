(function($) {
  $(document).ready(function(e) {
    window.onscroll = function() {
        var scroll = window.pageYOffset;
        if (scroll <= 374) {
          var navs = document.getElementById("nav").children[0].children;
          for (var i = 0; i < navs.length; i++) {
            navs[i].children[0].style.color = "#555f66";
          }
          document.getElementById("home-nav").style.color = "#629DD1";
        } else if (scroll > 374 && scroll <= 1156) {
          var navs = document.getElementById("nav").children[0].children;
          for (var i = 0; i < navs.length; i++) {
            navs[i].children[0].style.color = "#555f66";
          }
          document.getElementById("skills-nav").style.color = "#629DD1";
        } else if (scroll > 1156 && scroll <= 2625) {
          var navs = document.getElementById("nav").children[0].children;
          for (var i = 0; i < navs.length; i++) {
            navs[i].children[0].style.color = "#555f66";
          }
          document.getElementById("portfolio-nav").style.color = "#629DD1";
        } else if (scroll > 2625 && scroll <= 6150) {
          var navs = document.getElementById("nav").children[0].children;
          for (var i = 0; i < navs.length; i++) {
            navs[i].children[0].style.color = "#555f66";
          }
          document.getElementById("career-nav").style.color = "#629DD1";
        } else if (scroll > 6150) {
          var navs = document.getElementById("nav").children[0].children;
          for (var i = 0; i < navs.length; i++) {
            navs[i].children[0].style.color = "#555f66";
          }
          document.getElementById("contact-nav").style.color = "#629DD1";
        }
    };
  });
})(jQuery);
