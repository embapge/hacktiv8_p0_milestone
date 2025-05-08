<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="" />
  <meta name="author" content="" />
  <title>BartVision - Home</title>
  <!-- Favicon-->
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
  <!-- Bootstrap icons-->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
    rel="stylesheet" />
  <!-- Core theme CSS (includes Bootstrap)-->
  <link href="css/styles.css" rel="stylesheet" />
  <link href="css/custom.css" rel="stylesheet" />
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
      <a class="navbar-brand d-flex align-items-center gap-2" href="/milestone"><i class="bx bx-camera bx-sm"></i><strong>BartVision</strong></a>
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
            <a class="nav-link active" aria-current="page" href="/milestone">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/milestone/pages/product.php">Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/milestone/pages/gallery.php">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/milestone/pages/about-us.php">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/milestone/pages/contact-us.php">Contact Us</a>
          </li>
        </ul>
        <ul class="navbar-nav mb-2 mb-lg-0 gap-2">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="/milestone/pages/login.php">Login</a>
          </li>
          <li class="nav-item">
            <a
              class="btn btn-outline-primary"
              aria-current="page"
              href="/milestone/pages/register.php">Register</a>
          </li>
          <li class="nav-item active">
            <a
              href="/milestone/pages/cart.php"
              class="btn btn-outline-secondary active">
              <i class="bx bx-cart-alt"></i>
              <small class="badge badge-light cart-count"></small>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- Header-->
  <header class="p-3 p-md-5">
    <div class="overlay"></div>
    <div class="p-4 p-lg-5 bg-light rounded-3 text-center cover">
      <div class="m-4 m-lg-5">
        <h1 class="display-5 fw-bold">
          Solusi Terbaik untuk Kebutuhan Fotografi Anda !
        </h1>
        <p class="fs-4">
          Temukan berbagai pilihan kamera dan perlengkapan fotografi terbaik
          dengan harga bersaing dan kualitas terjamin.
        </p>
        <a class="btn btn-primary btn-lg" href="/milestone/pages/product.php">Mulai berbelanja!</a>
      </div>
    </div>
  </header>
  <!-- Page Content-->
  <main class="container-fluid p-md-5">
    <section class="accordion mt-5" id="faqAccordion">
      <!-- FAQ Accordion -->
      <h3 class="mb-4">Frequently Asked Questions</h3>
      <div class="accordion-item">
        <h2 class="accordion-header" id="faqHeadingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faqCollapseOne"
            aria-expanded="true"
            aria-controls="faqCollapseOne">
            What products do you offer?
          </button>
        </h2>
        <div
          id="faqCollapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="faqHeadingOne"
          data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            We offer a wide range of cameras, lenses, accessories, and other
            photography and videography equipment to meet your needs.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="faqHeadingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faqCollapseTwo"
            aria-expanded="false"
            aria-controls="faqCollapseTwo">
            Do you provide customer support?
          </button>
        </h2>
        <div
          id="faqCollapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="faqHeadingTwo"
          data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            Yes, our team of experts is available to assist you with any
            questions or concerns you may have.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="faqHeadingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#faqCollapseThree"
            aria-expanded="false"
            aria-controls="faqCollapseThree">
            What is your return policy?
          </button>
        </h2>
        <div
          id="faqCollapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="faqHeadingThree"
          data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            We offer a 30-day return policy for unused and unopened products.
            Please contact our support team for more details.
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- Footer-->

  <footer class="py-5 bg-dark">
    <div class="container">
      <p class="m-0 text-center text-white">
        Copyright &copy; BartVision 2025
      </p>
    </div>
  </footer>
  <!-- Bootstrap core JS-->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
  <!-- Core theme JS-->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="js/index.js"></script>
  <script src="js/all.js"></script>
  <script src="js/scripts.js"></script>
</body>

</html>