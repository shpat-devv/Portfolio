// Include the SMTP.js library
var script = document.createElement('script');
script.src = 'https://smtpjs.com/v3/smtp.js';
document.head.appendChild(script);

document.getElementById('sendButton').addEventListener('click', function() {
  // Get values from input fields
  var name = document.querySelector('input[name="name"]').value;
  var email = document.querySelector('input[name="email"]').value;
  var subject = document.querySelector('input[name="subject"]').value;
  var message = document.querySelector('textarea[name="message"]').value;

  // Send email using SMTP.js
  Email.send({
      Host: "smtp.elasticemail.com",
      Username: "unattractivequeen@gmail.com",
      Password: "cffs ehnp wlca sxwd",
      To: 'shpatavdiu4@gmail.com',
      From: email,
      Subject: subject,
      Body: "Name: " + name + "<br>Email: " + email + "<br>Message: " + message
  }).then(function(message) {
      alert(message);
  });
});
