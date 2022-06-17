import { format } from "date-fns";

const getWeather = () => {
  function capName(a) {
    return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
  }

  function renderLocation(b) {
    const location = document.querySelector("#location");
    location.textContent = b;
  }

  function renderWeather(d) {
    const temperature = document.querySelector("#temp");
    const description = document.querySelector("#briefDescription");
    const humidity = document.querySelector("#humidity");
    const pressure = document.querySelector("#pressure");
    const wind = document.querySelector("#wind");
    const date = document.querySelector("#date");
    const photo = document.querySelector("#weatherIcon");
    const result = Number(d.main.temp) - 273.15;

    temperature.textContent = Math.round(result);
    description.textContent = d.weather[0].description;
    humidity.textContent = `${d.main.humidity} %`;
    pressure.textContent = `${d.main.pressure} Pa`;
    wind.textContent = `${d.wind.speed} km/h`;
    date.textContent = format(new Date(), "EEEE. MMM dd. yyyy");
    photo.src = `http://openweathermap.org/img/w/${d.weather[0].icon}.png`;
  }

  const getTemp = (name) => {
    const cappedName = capName(name);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cappedName}&APPID=4eaaa26ad9ee84323de7fe5e30bc033a`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => {
        renderWeather(response);
        renderLocation(cappedName);
      })

      .catch((error) => {
        console.log(error);
      });
  };
  return { getTemp };
};

export default getWeather;
