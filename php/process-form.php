<?php
if (isset($_REQUEST['name'], $_REQUEST['email'], $_REQUEST['subject'], $_REQUEST['message'])) {
      
    $name = $_REQUEST['name'];
    $mail = $_REQUEST['email'];
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];

    // Set your email address where you want to receive emails.
    $to = 'unattractivequeen@gmail.com';

    $headers = "From: $name <$mail> \r\n";

    $send_email = mail($to, $subject, $message, $headers);

    echo ($send_email) ? 'success' : 'error';

