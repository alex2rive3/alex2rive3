document.addEventListener("DOMContentLoaded", function () {
  var formSubmit = document.getElementById("contact-form");
  formSubmit.addEventListener("submit", mostrarToast);
});

function mostrarToast() {
  var toast = document.getElementById("toast-simple");
  toast.classList.remove("hidden");

  setTimeout(function () {
    toast.classList.add("hidden");
  }, 2000);
}

