const getWeather = () => {
  function capName(a) {
    return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
  }

  function renderLocation(b) {
    const location = document.querySelector("#location");
    location.textContent = b;
  }

  function photoWeatherRender(c) {
    const imageContainer = document.querySelector("#imageContainer");
    const photo = document.createElement("img");
    imageContainer.appendChild(photo);
    photo.src = c.data.images.original.url;
  }

  function renderWeather(d) {
    const temperature = document.querySelector("#temp");
    const description = document.querySelector("#briefDescription");
    const humidity = document.querySelector("#humidity");
    const pressure = document.querySelector("#pressure");
    const wind = document.querySelector("#wind");
    const date = document.querySelector("#date");
    const result = Number(d.main.temp) - 273.15;

    temperature.textContent = Math.round(result);
    description.textContent = d.weather[0].description;
    humidity.textContent = `humidity: ${d.main.humidity} %`;
    pressure.textContent = `pressure: ${d.main.pressure} Pa`;
    wind.textContent = `wind speed: ${d.wind.speed} km/h`;
    date.textContent = new Date();
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

        fetch(
          `https://api.giphy.com/v1/gifs/translate?api_key=RIIuJYIyG5MmEDmQ3ymmwqP1p365z4uU&s=${response.weather[0].main}}`,
          { mode: "cors" }
        )
          .then((myData) => myData.json())
          .then((myData) => photoWeatherRender(myData));
      })

      .catch((response) => {
        if (response !== Object) {
          console.log(`${name} not found`);
        }
      });
  };
  return { getTemp };
};

export default getWeather;
