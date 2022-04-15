const getWeather = () => {
  const tempContainer = document.querySelector("#tempContainer");
  const feelsLikeContainer = document.querySelector("#feelsLikeContainer");
  const tempMinContainer = document.querySelector("#tempMinContainer");
  const tempMaxContainer = document.querySelector("#tempMaxContainer");
  const humidityContainer = document.querySelector("#humidityContainer");
  const pressureContainer = document.querySelector("#pressureContainer");

  const getTemp = (name) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=4eaaa26ad9ee84323de7fe5e30bc033a`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => {
        tempContainer.textContent = response.main.temp;
        feelsLikeContainer.textContent = response.main.feels_like;
        tempMinContainer.textContent = response.main.temp_min;
        tempMaxContainer.textContent = response.main.temp_max;
        pressureContainer.textContent = response.main.pressure;
        humidityContainer.textContent = response.main.humidity;
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
