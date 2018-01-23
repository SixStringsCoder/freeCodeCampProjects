const x = document.getElementById("main");

// Get GEO Location
const getLocation = function() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(weatherApi);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
};

const weatherApi = function(position) {
  const lon = position.coords.longitude;
  const lat = position.coords.latitude;
  const urlToFetch = `https://fcc-weather-api.glitch.me/api/current?lon=${lon}&lat=${lat}`;
  return fetch(urlToFetch)
    .then(response => response.json())
    .then(jsonResponse => {
      let weather = jsonResponse;

      renderWeather(weather);
    });
}

function renderWeather(weather) {
  console.log(weather);
  let fahrenheit = Math.round(weather.main.temp * 9/5 + 32) + '&#176;F';
  let celsius = Math.round(weather.main.temp) + '&#176;C';
  let icon = weather.weather[0].icon;
  let description = weather.weather[0].description.toUpperCase();
  let weatherIcon = `<img id="icon" src=${icon} alt="${description}" />`;

  $('#fahrenheit').append(fahrenheit);
  $('#celsius').append(celsius);
  $('.icon').append(weatherIcon);
  $('#description').append(description);
}


const howsTheWeather = function(){
    getLocation();
  }
