$(document).ready(function() {
  console.log("Document Ready");
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
