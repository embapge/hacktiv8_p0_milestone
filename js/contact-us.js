document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("error") === "database_error") {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "There was an error processing your request. Please try again later.",
    });
  } else if (urlParams.get("error") === "all_fields_required") {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "All fields are required.",
    });
  } else if (urlParams.get("success") === "message_sent") {
    Swal.fire({
      icon: "success",
      title: "Message Sent",
      text: "Your message has been sent successfully.",
    });
  }

  const newUrl = window.location.origin + window.location.pathname;
  window.history.replaceState({}, document.title, newUrl);
});
