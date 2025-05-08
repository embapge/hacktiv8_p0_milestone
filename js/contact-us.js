document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  let payButton = form.querySelector("#reset_form");

  payButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form reset behavior
    if (form.checkValidity()) {
      // return true/false https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/checkValidity
      // Check if form passes validation
      resetForm(form);
      Swal.fire({
        title: "Success!",
        text: "Your contact form has been submitted successfully.",
        icon: "success",
        confirmButtonColor: "#100c08",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Please fill out the form correctly before submitting.",
        icon: "error",
        confirmButtonColor: "#d33",
      });
    }
  });
});
