<?php
require_once '../database/connection.php';

session_start();

$connection = new Database();
$mysqli = $connection->getConnection();

// Retrieve old session data if available
$full_name = $_SESSION['full_name'] ?? '';
$email = $_SESSION['email'] ?? '';
$subject = $_SESSION['subject'] ?? '';
$message = $_SESSION['message'] ?? '';

// Validate all inputs
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $full_name = trim($_POST['full_name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $message = trim($_POST['message'] ?? '');

    if (empty($full_name) || empty($email) || empty($subject) || empty($message)) {
        header("Location: http://localhost/milestone/pages/contact-us.php?error=all_fields_required");
        exit;
    }

    try {
        $stmt = $mysqli->prepare("INSERT INTO contacts (full_name, email, subject, message) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $full_name, $email, $subject, $message);
        $stmt->execute();
        $stmt->close();

        unset($_SESSION['old_full_name'], $_SESSION['old_email'], $_SESSION['old_subject'], $_SESSION['old_message']);
        header("Location: http://localhost/milestone/pages/contact-us.php?success=message_sent");
        exit;
    } catch (mysqli_sql_exception $e) {
        $_SESSION['old_full_name'] = $full_name;
        $_SESSION['old_email'] = $email;
        $_SESSION['old_subject'] = $subject;
        $_SESSION['old_message'] = $message;

        die("Error: " . $e->getMessage()); // Debugging line, remove in production
        header("Location: http://localhost/milestone/pages/contact-us.php?error=database_error");
        exit;
    }
}
