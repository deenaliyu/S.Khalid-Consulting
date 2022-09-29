<?php
    $hostname_fasaha = "localhost";
    $database_fasaha = "skhalid";
    $username_fasaha = "root";
    $password_fasaha = "";
    $sKhalid = mysqli_connect($hostname_fasaha, $username_fasaha, $password_fasaha, $database_fasaha) or trigger_error(mysqli_error($allonfasaha),E_USER_ERROR);
?>