       function formatDate(timestamp) {
       
       let now = new Date(timestamp);

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
      let date = now.getDate();

      let hours = now.getHours();
      if (hours < 10) hours = `0${hours}`;
 

      let minutes = now.getMinutes();
      if (minutes < 10) minutes = `0${minutes}`;

      return `${day}, ${month} ${date} || ${hours}:${minutes}`;
    }

   
function formatHours(timestamp) {
let now = new Date(timestamp);

  let hours = now.getHours();
  if (hours < 10) hours = `0${hours}`;
     

  let minutes = now.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
     

  return `${hours}:${minutes}`;

      }

     function showTemperature(response) {
         console.log(response.data);
        console.log(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
 let iconElement = document.querySelector("#icon");   
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let dateElement = document.querySelector("#date");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
 iconElement.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  humidityElement.innerHTML = `${response.data.main.humidity}%`;
  windElement.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  descriptionElement.innerHTML =`🔸 ${response.data.weather[0].description} 🔸`;
dateElement.innerHTML = `${formatDate(response.data.dt *1000)}`;
 }

 function showForecast(response) {
console.log(response.data);
let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = null;
let forecast = null; 
console.log(forecast);


for (let index = 0; index < 6; index++) {
  forecast = response.data.list[index]; 
 
  forecastElement.innerHTML += `
 <div class = "col-2">
<h2><strong> ${formatHours(forecast.dt * 1000)} </strong></h2>
<img src= "https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />
<ul>
  <li>${Math.round(forecast.main.temp_max)}°</li>
  <li>${Math.round(forecast.main.temp_min)}°</li>
    </ul>
             </div>
             `
            ;
}


 }

      function search(city) {
       let apiKey = "674e329bcdb1dff7f09baa41eea23436";
       let unit = "metric"; 
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(showTemperature);  

        apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${unit}`;
        axios.get(apiUrl).then(showForecast);  

      }

      function handleSubmit(event) {
        event.preventDefault();
         let cityInput = document.querySelector("#city-input");
          search(cityInput.value);
      }

      let form = document.querySelector("#search-engine");
      form.addEventListener("submit", handleSubmit);

      search("Delft");
     
  