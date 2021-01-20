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

     function showTemperature(response) {
         console.log(response.data);
        console.log(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
 
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let dateElement = document.querySelector("#date");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
 
  humidityElement.innerHTML = `${response.data.main.humidity}%`;
  windElement.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  descriptionElement.innerHTML = response.data.weather[0].description;
dateElement.innerHTML = ` ${day}, ${month} ${date}|| ${hours}:${minutes}`;
 }
      
      function search(city) {
       let apiKey = "674e329bcdb1dff7f09baa41eea23436";
       let unit = "metric"; 
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(showTemperature);  
      }

      function handleSubmit(event) {
        event.preventDefault();
         let cityInput = document.querySelector("#city-input");
          search(cityInput.value);
      }

      let form = document.querySelector("#search-engine");
      form.addEventListener("submit", handleSubmit);

      search("Delft");
     
  