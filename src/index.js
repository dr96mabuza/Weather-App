import { getWeather } from "./API";
import "./DOM";

const temp = getWeather();

const input = document.querySelector("#city");
const submitButton = document.querySelector("#submitBtn");
submitButton.addEventListener("click", () => {
  temp.getTemp(input.value);
  input.value = "";
});
