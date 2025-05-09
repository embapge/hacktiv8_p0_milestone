document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("error") === "invalid_credentials") {
    Swal.fire({
      icon: "error",
      title: "Registration Error",
      text: "Invalid credentials. Please try again.",
    });
  } else if (urlParams.get("error") === "username_password_required") {
    Swal.fire({
      icon: "error",
      title: "Registration Error",
      text: "Username and password are required.",
    });
  } else if (urlParams.get("error") === "duplicate_entry") {
    Swal.fire({
      icon: "error",
      title: "Registration Error",
      text: "Username, email or phone already exists. Please choose a different one.",
    });
  } else if (urlParams.get("error") === "all_fields_required") {
    Swal.fire({
      icon: "error",
      title: "Registration Error",
      text: "All field are required.",
    });
  } else if (urlParams.get("error") === "password_mismatch") {
    Swal.fire({
      icon: "error",
      title: "Registration Error",
      text: "Passwords do not match.",
    });
  }

  const newUrl = window.location.origin + window.location.pathname;
  window.history.replaceState({}, document.title, newUrl);
});
