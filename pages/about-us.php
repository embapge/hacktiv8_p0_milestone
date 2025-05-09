<?php
session_start();
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
  <title>BartVision - About Us</title>
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

<body>
  <!-- Responsive navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
    <div class="container-fluid px-lg-5">
      <a class="navbar-brand d-flex align-items-center gap-2" href="../index.php"><i class="bx bx-camera bx-sm"></i><strong>BartVision</strong></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-between"
        id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 ps-md-5">
          <li class="nav-item">
            <a class="nav-link" href="../index.php">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="product.php">Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="gallery.php">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="about-us.php">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact-us.php">Contact Us</a>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0 gap-2">
          <?php if (isset($_SESSION['user_id'])): ?>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="bx bx-user-circle bx-sm"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <form method="post" action="../controllers/logout-action.php">
                    <button type="submit" class="dropdown-item">Logout</button>
                  </form>
                </li>
              </ul>
            </li>
          <?php else: ?>
            <li class="nav-item">
              <a
                class="nav-link active"
                href="login.php">Login</a>
            </li>
            <li class="nav-item">
              <a
                class="btn btn-outline-primary"
                href="register.php">Register</a>
            </li>
          <?php endif; ?>
          <li class="nav-item active">
            <a
              href="cart.php"
              class="btn btn-outline-secondary active">
              <i class="bx bx-cart-alt"></i>
              <small class="badge badge-light cart-count"></small>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Page Content-->
  <main class="p-md-5 container-fluid">
    <div class="row">
      <!-- Left Column -->
      <div class="col-md-6 mb-4">
        <h2 class="mb-5">About Us</h2>
        <p>
          Welcome to BartVision, your one-stop destination for premium photo
          and videography products. We are passionate about capturing life's
          most precious moments and providing you with the tools to do the
          same. Our mission is to empower creators, professionals, and
          enthusiasts with high-quality equipment that delivers exceptional
          results.
        </p>
        <h4 class="mt-4">Our Vision</h4>
        <p>
          To be the leading provider of innovative and reliable photo and
          videography solutions, inspiring creativity and excellence in every
          frame.
        </p>
        <h4 class="mt-4">Our Mission</h4>
        <ul>
          <li>
            Deliver top-notch products that meet the needs of photographers
            and videographers.
          </li>
          <li>
            Provide exceptional customer service and support to ensure
            satisfaction.
          </li>
          <li>
            Continuously innovate and adapt to the latest trends and
            technologies.
          </li>
        </ul>
      </div>
      <!-- Right Column -->
      <div class="col-md-6 p-md-5">
        <div class="card shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-center">Why Choose Us?</h5>
            <ul class="list-unstyled">
              <li class="mb-3">
                <i class="bx bx-check-circle text-success"></i>
                <strong>High-Quality Products:</strong> We offer a wide range
                of premium cameras, lenses, and accessories.
              </li>
              <li class="mb-3">
                <i class="bx bx-check-circle text-success"></i>
                <strong>Affordable Prices:</strong> Get the best value for
                your money with competitive pricing.
              </li>
              <li class="mb-3">
                <i class="bx bx-check-circle text-success"></i>
                <strong>Expert Support:</strong> Our team of professionals is
                here to guide you every step of the way.
              </li>
              <li class="mb-3">
                <i class="bx bx-check-circle text-success"></i>
                <strong>Customer Satisfaction:</strong> Your happiness is our
                priority, and we strive to exceed your expectations.
              </li>
            </ul>
            <div class="text-center mt-4">
              <a href="product.php" class="btn btn-primary">Explore Our Products</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!-- Footer-->
  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">
        Copyright &copy; BartVision 2025
      </p>
    </div>
  </footer>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="../js/all.js"></script>
  <!-- Bootstrap core JS-->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  <!-- Core theme JS-->
  <script src="../js/contact-us.js"></script>
  <script src="../js/scripts.js"></script>
</body>

</html>