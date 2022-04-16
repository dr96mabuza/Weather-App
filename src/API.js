const getWeather = () => {
  const location = document.querySelector("#location");
  const temperature = document.querySelector("#temp");
  const description = document.querySelector("#briefDescription");
  const humidity = document.querySelector("#humidity");
  const pressure = document.querySelector("#pressure");
  const wind = document.querySelector("#wind");
  const date = document.querySelector("#date");

  const getTemp = (name) => {
    const nameFinal =
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${nameFinal}&APPID=4eaaa26ad9ee84323de7fe5e30bc033a`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        location.textContent = nameFinal;
        temperature.textContent = Math.round(
          Number(response.main.temp) - 273.15
        );
        description.textContent = response.weather[0].description;
        humidity.textContent = response.main.humidity;
        pressure.textContent = response.main.pressure;
        wind.textContent = response.wind.speed;
        date.textContent = new Date();
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
