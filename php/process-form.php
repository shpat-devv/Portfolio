<?php
if (isset($_REQUEST['name'], $_REQUEST['email'], $_REQUEST['subject'], $_REQUEST['message'])) {
      
    $name = $_REQUEST['name'];
    $mail = $_REQUEST['email'];
    $subject = $_REQUEST['subject'];
    $message = $_REQUEST['message'];

    // Set your Gmail address as the sender.
    $from = 'unattractivequeen@gmail.com';

    // Set the recipient email address.
    $to = 'shpatavdiu4@gmail.com';

    // Set additional headers.
    $headers = "From: $name <$from> \r\n";
    $headers .= "Reply-To: $name <$mail> \r\n";

    // Send email.
    $send_email = mail($to, $subject, $message, $headers);

    echo ($send_email) ? 'success' : 'error';
}
