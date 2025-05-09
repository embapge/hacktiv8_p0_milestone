document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("error") === "invalid_credentials") {
    Swal.fire({
      icon: "error",
      title: "Login Error",
      text: "Invalid credentials. Please try again.",
    });
  } else if (urlParams.get("error") === "username_password_required") {
    Swal.fire({
      icon: "error",
      title: "Login Error",
      text: "Username and password are required.",
    });
  } else if (urlParams.get("success") === "registration_successful") {
    Swal.fire({
      icon: "success",
      title: "Registration Successful",
      text: "You can now log in with your credentials.",
    });
  } else if (urlParams.get("success") === "successful_logout") {
    Swal.fire({
      icon: "success",
      title: "Logout Successful",
      text: "You have been logged out successfully.",
    });
  }

  const newUrl = window.location.origin + window.location.pathname;
  window.history.replaceState({}, document.title, newUrl);
});
