      function searchCity(event) {
        event.preventDefault();
        let cityInput = document.querySelector("#city-input");
        let h1 = document.querySelector("h1");
        h1.innerHTML = `${cityInput.value}`;
        let city = `${cityInput.value}`;
        let unit = "metric";
        let apiKey = "674e329bcdb1dff7f09baa41eea23436";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(showTemperature);
    
      }

      let form = document.querySelector("#search-engine");
      form.addEventListener("submit", searchCity);

      function showTemperature(response) {
        console.log(response.data);
        console.log(response.data.main.temp);
        let temperatureElement = document.querySelector("#temperature");
        temperatureElement.innerHTML = Math.round(response.data.main.temp);
    let iconElement = document.querySelector("icon");
    iconElement.setAttribute()

      }