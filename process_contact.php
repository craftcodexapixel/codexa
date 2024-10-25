<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the JSON data from the request body
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate and sanitize the data
    $name = filter_var($data['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
    $message = filter_var($data['message'], FILTER_SANITIZE_STRING);

    // Send email using PHPMailer or other methods
    require 'PHPMailer.php';
    require 'SMTP.php';

    $mail = new PHPMailer();
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP host
    $mail->SMTPAuth = true;
    $mail->Username = 'artistofwindows10@gmail.com'; // Replace with your email address
    $mail->Password = 'Ansh@7274'; // Replace with your email password
    $mail->SMTPSecure = 'tls'; // Or 'ssl' if required
    $mail->Port = 587; // Or other port as needed

    $mail->setFrom($email, $name);
    $mail->addAddress('artistofwindows10@gmail.com', 'Ansh Kumar Upadhaya'); // Replace with your recipient's email and name
    $mail->Subject = 'Contact Form Submission';
    $mail->Body = "Name: $name\nEmail: $email\nMessage: $message";

    if (!$mail->send()) {
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message sent successfully!';
    }
}