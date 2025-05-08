<?php
require_once '../database/connection.php';

session_start();

$connection = new Database();
$mysqli = $connection->getConnection();

if (empty($_POST['email']) || empty($_POST['username']) || empty($_POST['phone']) || empty($_POST['password'])) {
    header("Location: http://localhost/milestone/pages/register.php?error=all_fields_required");
    exit;
}

$email = $_POST['email'];
$username = $_POST['username'];
$phone = $_POST['phone'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);

try {
    $stmt = $mysqli->prepare("INSERT INTO users (email, username, phone, password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $email, $username, $phone, $password);
    $stmt->execute();
    $stmt->close();

    unset($_SESSION['old_email'], $_SESSION['old_username'], $_SESSION['old_phone']);
    header("Location: http://localhost/milestone/pages/login.php?success=registration_successful");
    exit;
} catch (mysqli_sql_exception $e) {
    $_SESSION['old_email'] = $_POST['email'] ?? '';
    $_SESSION['old_username'] = $_POST['username'] ?? '';
    $_SESSION['old_phone'] = $_POST['phone'] ?? '';

    if ($e->getCode() == 1062) { // Duplicate entry error
        header("Location: http://localhost/milestone/pages/register.php?error=duplicate_entry");
    } else {
        header("Location: http://localhost/milestone/pages/register.php?error=database_error");
    }
    exit;
}
