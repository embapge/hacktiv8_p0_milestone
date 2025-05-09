<?php
require_once '../database/connection.php';

session_start();

$connection = new Database();
$mysqli = $connection->getConnection();

$email = trim($_REQUEST['email'] ?? '');
$username = trim($_REQUEST['username'] ?? '');
$phone = trim($_REQUEST['phone'] ?? '');
$password = trim($_REQUEST['password'] ?? '');
$confirmPassword = trim($_REQUEST['confirm_password'] ?? '');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (empty($_POST['email']) || empty($_POST['username']) || empty($_POST['phone']) || empty($_POST['password']) || empty($_POST['confirm_password'])) {
        header("Location: http://localhost/milestone/pages/register.php?error=all_fields_required");
        exit;
    }

    $_SESSION['old_email'] = $_POST['email'] ?? '';
    $_SESSION['old_username'] = $_POST['username'] ?? '';
    $_SESSION['old_phone'] = $_POST['phone'] ?? '';

    if ($password !== $confirmPassword) {
        header("Location: http://localhost/milestone/pages/register.php?error=password_mismatch");
        exit;
    }

    try {
        $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
        $stmt = $mysqli->prepare("INSERT INTO users (email, username, phone, password) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $email, $username, $phone, $password);
        $stmt->execute();
        $stmt->close();

        unset($_SESSION['old_email'], $_SESSION['old_username'], $_SESSION['old_phone']);
        header("Location: http://localhost/milestone/pages/login.php?success=registration_successful");
        exit;
    } catch (mysqli_sql_exception $e) {
        if ($e->getCode() == 1062) { // Duplicate entry error
            header("Location: http://localhost/milestone/pages/register.php?error=duplicate_entry");
        } else {
            header("Location: http://localhost/milestone/pages/register.php?error=database_error");
        }
        exit;
    }
}
