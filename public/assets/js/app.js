$(document).ready(function() {
  console.log("Document Ready");

  // Script For the animation
  $('.nav li a').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
  && location.hostname == this.hostname) {
    var $target = $(this.hash);
    $target = $target.length && $target
    || $('[name=' + this.hash.slice(1) +']');
    if ($target.length) {
      var targetOffset = $target.offset().top;
      $('html,body')
      .animate({scrollTop: targetOffset}, 1000);
     return false;
    }
  }
});

// Script to make the div take the full screen page
$(".section").css("min-height", $(window).height());

  $("#contactForm").submit(function(e) {
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();
    console.log(name);
    console.log(email);
    console.log(message);
    var userObj = {
      name: name,
      email: email,
      message: message
    };
    if (!name || !email || !message ){
        alert("Check your entries")
    }else{
      $.ajax({
        url: "https://formspree.io/jose.velez363@gmail.com",
        method: "POST",
        data: userObj,
        dataType: "json"
      });
      e.preventDefault();
      $(this).get(0).reset();
    }




  });
});
