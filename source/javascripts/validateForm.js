function validateForm() {
  var firstname =  document.getElementById('firstname').value;
  if (firstname == "") {
      document.querySelector('.status').innerHTML = "firstname cannot be empty";
      return false;
  }
  var lastname =  document.getElementById('lastname').value;
  if (lastname == "") {
      document.querySelector('.status').innerHTML = "lastname cannot be empty";
      return false;
  }
  var email =  document.getElementById('Email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Subject cannot be empty";
      return false;
  }
  var message =  document.getElementById('textarea').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty";
      return false;
  }
  document.querySelector('.status').innerHTML = "Sending...";
  formData = {
  'firstname'     : $('input[name=firstname]').val(),
  'lastname'     : $('input[name=lastname]').val(),
  'email'    : $('input[name=_replyto]').val(),
  'subject'  : $('input[name=subject]').val(),
  'message'  : $('textarea[name=message]').val()
  };


  $.ajax({
  url : "https://formspree.io/mnqjyobo",
  type: "POST",
  data : formData,
  success: function(data, textStatus, jqXHR)
  {

  $('#status').text(data.message);
  if (data.code) //If mail was sent successfully, reset the form.
  $('#contact-form').closest('form').find("input[type=text], textarea").val("");
  },
  error: function (jqXHR, textStatus, errorThrown)
  {
  $('#status').text(jqXHR);
  }
  });
}

