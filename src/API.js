const getWeather = () => {
  const location = document.querySelector("#location");
  const temperature = document.querySelector("#temp");
  const description = document.querySelector("#briefDescription");
  const humidity = document.querySelector("#humidity");
  const pressure = document.querySelector("#pressure");
  const wind = document.querySelector("#wind");
  const date = document.querySelector("#date");
  const imageContainer = document.querySelector("#imageContainer");
  const photo = document.createElement("img");
  imageContainer.appendChild(photo);

  const getTemp = (name) => {
    const nameFinal =
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${nameFinal}&APPID=4eaaa26ad9ee84323de7fe5e30bc033a`,
      { mode: "cors" }
    )
      .then((response) => response.json())
      .then((response) => {
        const picType = response.weather[0].main;
        console.log(response);
        fetch(
          `https://api.giphy.com/v1/gifs/translate?api_key=RIIuJYIyG5MmEDmQ3ymmwqP1p365z4uU&s=${picType}}`,
          { mode: "cors" }
        )
          .then((myData) => myData.json())
          .then((myData) => {
            console.log(myData);
            photo.src = myData.data.images.original.url;
            const result = Number(response.main.temp) - 273.15;
            location.textContent = nameFinal;
            temperature.textContent = Math.round(result);
            description.textContent = response.weather[0].description;
            humidity.textContent = `humidity: ${response.main.humidity} %`;
            pressure.textContent = `pressure: ${response.main.pressure} Pa`;
            wind.textContent = `wind speed: ${response.wind.speed} km/h`;
            date.textContent = new Date();
          });
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
