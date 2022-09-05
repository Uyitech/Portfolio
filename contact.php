<?php
    $toEmail = "ewansihaevans@gmail.com";
    // $mailHeaders = "From: " . $_POST["name"] . "<". $_POST["email"] .">\r\n";
    $header = "From: uyi@julitech.net\r\n";
    $header.= "MIME-Version: 1.0\r\n";
    $header.= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $header.= "X-Priority: 1\r\n";
    if(mail($toEmail, $_POST["subject"], $_POST["message"], $header)) {
        print "<p class='success'>Successfully Sent Message.</p>";
    } else {
        print "<p class='danger'>Problem Sending Message.</p>";
    }
?>