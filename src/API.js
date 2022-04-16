const getWeather = () => {
  const location = document.querySelector("#location");
  const temperature = document.querySelector("#temp");
  const description = document.querySelector("#briefDescription");
  const humidity = document.querySelector("#humidity");
  const pressure = document.querySelector("#pressure");
  const wind = document.querySelector("#wind");
  const date = document.querySelector("#date");

  const getTemp = (name) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=4eaaa26ad9ee84323de7fe5e30bc033a`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        location.textContent = name;
        temperature.textContent = response.main.temp;
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
