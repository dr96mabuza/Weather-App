const input = document.querySelector("#city");

function checkInputError() {
  if (!input.validity.valid) {
    input.setCustomValidity("Enter city or town name");
  } else {
    input.checkValidity();
  }
}

input.addEventListener("input", () => {
  if (input.validity.valid) {
    input.setCustomValidity("");
    input.checkValidity();
  } else {
    checkInputError();
  }
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

export default checkInputError;
