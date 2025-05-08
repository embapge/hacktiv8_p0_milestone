<?php
require_once '../database/connection.php';

session_start();

$connection = new Database();
$mysqli = $connection->getConnection();

$username = $_REQUEST['username'] ?? '';
$password = $_REQUEST['password'] ?? '';
$_SESSION['old_username'] = $username;

if (empty($username) || empty($password)) {
    header("Location: http://localhost/milestone/pages/login.php?error=username_password_required");
    exit;
}

$stmt = $mysqli->prepare("SELECT id, password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
    header("Location: http://localhost/milestone/pages/login.php?error=invalid_credentials");
    exit;
}

$user = $result->fetch_assoc();
if (!password_verify($password, $user['password'])) {
    header("Location: http://localhost/milestone/pages/login.php?error=invalid_credentials");
    exit;
}

$_SESSION['user_id'] = $user['id'];
$_SESSION['username'] = $username;
$_SESSION['logged_in'] = true;
header("Location: http://localhost/milestone?login=success");
exit;
