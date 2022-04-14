const getWeather = () => {
  const getTemp = (name) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=4eaaa26ad9ee84323de7fe5e30bc033a`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.main.temp);
        console.log(response.main.feels_like);
        console.log(response.main.temp_min);
        console.log(response.main.temp_max);
        console.log(response.main.pressure);
        console.log(response.main.humidity);
      });
  };
  return { getTemp };
};

export { getWeather };
