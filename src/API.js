const getWeather = () => {
  function capNameAndRender(a) {
    const nameFinal = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
    const location = document.querySelector("#location");
    location.textContent = nameFinal;
  }

  function getPhoto() {
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=RIIuJYIyG5MmEDmQ3ymmwqP1p365z4uU&s=${picType}}`,
      { mode: "cors" }
    ).then((myData) => myData.json());
  }

  function photoWeatherRender(b) {
    const imageContainer = document.querySelector("#imageContainer");
    const photo = document.createElement("img");
    imageContainer.appendChild(photo);
    photo.src = b.data.images.original.url;
  }

  function renderWeather(c) {
    const temperature = document.querySelector("#temp");
    const description = document.querySelector("#briefDescription");
    const humidity = document.querySelector("#humidity");
    const pressure = document.querySelector("#pressure");
    const wind = document.querySelector("#wind");
    const date = document.querySelector("#date");
    const result = Number(c.main.temp) - 273.15;

    temperature.textContent = Math.round(result);
    description.textContent = c.weather[0].description;
    humidity.textContent = `humidity: ${c.main.humidity} %`;
    pressure.textContent = `pressure: ${c.main.pressure} Pa`;
    wind.textContent = `wind speed: ${c.wind.speed} km/h`;
    date.textContent = new Date();
  }

  const getTemp = (name) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${nameFinal}&APPID=4eaaa26ad9ee84323de7fe5e30bc033a`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => {
        const picType = response.weather[0].main;
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
