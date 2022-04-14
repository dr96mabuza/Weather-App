const input = document.querySelector("#city");
input.addEventListener("input", () => {
  if (input.validity.valueMissing) {
    input.setCustomValidity("Enter City Name");
    input.checkValidity();
  } else {
    input.setCustomValidity("");
    input.checkValidity();
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
