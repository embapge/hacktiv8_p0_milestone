document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("login") === "success") {
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "Welcome back!",
    });
  }

  const newUrl = window.location.origin + window.location.pathname;
  window.history.replaceState({}, document.title, newUrl);
});
