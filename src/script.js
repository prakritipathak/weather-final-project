       let now = new Date();
      console.log(now);

      let days = [
        "Sun",
        "Mon",
        "Tues",
        "Wed",
        "Thurs",
        "Fri",
        "Sat",
      ];

      let day = days[now.getDay()];
      console.log(day);

      let year = now.getFullYear();
      console.log(now.getFullYear());

      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      let month = months[now.getMonth()];
      console.log(month);

      let date = now.getDate();
      console.log(now.getDate());

      let hours = now.getHours();
      if (hours < 10) hours = `0${hours}`;
      console.log(now.getHours());

      let minutes = now.getMinutes();
      if (minutes < 10) minutes = `0${minutes}`;
      console.log(now.getMinutes());

    
      
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
        let iconElement = document.querySelector("#icon");
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `${response.data.main.humidity}%`;
    let windElement = document.querySelector("#wind");
     windElement.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
     let descriptionElement = document.querySelector("#description");
     descriptionElement.innerHTML = response.data.weather[0].description;
let dateElement = document.querySelector("#date");
dateElement.innerHTML = ` ${day}, ${month} ${date}|| ${hours}:${minutes}`;
 }


  