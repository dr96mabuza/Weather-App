import "./style.css";
import getWeather from "./API";
import checkInputError from "./DOM";

const temp = getWeather();

const input = document.querySelector("#city");
const submitButton = document.querySelector("#submitBtn");
submitButton.addEventListener("click", () => {
  if (input.value !== "") {
    temp.getTemp(input.value);
    input.value = "";
  } else {
    checkInputError();
  }
});
