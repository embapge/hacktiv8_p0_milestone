<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    session_start();
    session_destroy();
    // Redirect to the login page with a success message
    header("Location: ../pages/login.php?success=successful_logout");
    exit;
}
