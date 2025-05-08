<?php
session_start();
if (isset($_SESSION['user_id'])) {
  header("Location: http://localhost/milestone");
  exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>BartVision - Login</title>
  <!-- Favicon-->
  <link rel="icon" type="image/x-icon" href="../assets/favicon.ico" />
  <!-- Bootstrap icons-->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
    rel="stylesheet" />
  <!-- Core theme CSS (includes Bootstrap)-->
  <link href="../css/styles.css" rel="stylesheet" />
  <link href="../css/custom.css" rel="stylesheet" />
  <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
    rel="stylesheet" />
</head>

<body
  style="
      background: linear-gradient(to bottom, rgb(48, 48, 48), rgb(54, 54, 54));
    ">
  <main
    class="container d-flex justify-content-center align-items-center vh-100">
    <div
      class="card shadow"
      style="width: 48rem;">
      <!-- Left Column: Image -->
      <div class="row">
        <div class="col-md-6">
          <img
            src="../assets/bartvision-logo.png"
            alt="BartVision Logo"
            class="img-fluid h-100 w-100"
            style="
                 object-fit: cover;
                 border-top-left-radius: 0.25rem;
                 border-bottom-left-radius: 0.25rem;
               " />
        </div>
        <!-- Right Column: Form -->
        <div class="col-md-6 p-4">
          <h1 class="card-title text-center mb-4">Login</h1>
          <form action="../controllers/login-action.php" method="POST">
            <div class="mb-3">
              <label for="username" class="form-label">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                class="form-control"
                value="<?php echo (array_key_exists('old_username', $_SESSION) && $_SESSION['old_username'] && !empty($_SESSION['old_username'])) ? $_SESSION['old_username'] : ''; ?>"
                required />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                class="form-control"
                required />
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-dark">Login</button>
            </div>
          </form>
          <div class="text-center mt-3">
            Don't have an account?
            <a href="/milestone/pages/register.php" class="text-decoration-none"> Register here</a>
          </div>
        </div>
      </div>
    </div>
  </main>

  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="../js/login.js"></script>
  <?php unset($_SESSION['old_username']); ?>
</body>

</html>