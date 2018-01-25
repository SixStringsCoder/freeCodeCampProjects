const x = document.getElementById("main");
const weatherIcons = ["sunny", "rainy", "snowy", "cloudy", "partlyCloudy"];

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
  const key = '47fc843c8ccb0a9ebc311d1ee955da73';
  //Using freecodecamp API
  const urlToFetch = `https://fcc-weather-api.glitch.me/api/current?lon=${lon}&lat=${lat}`;
  // Using OpenWeatherMap api
  // const urlToFetch = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${key}`;

  return fetch(urlToFetch)
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse);
      let weather = jsonResponse;

      renderWeather(weather);
    });
}

// For custom weather icons
// function chooseIcon(weather) {
//   weather = weather.weather[0].main
//   if (weather.weather[0].main == "Rain") {
//     $('.icon').html('<img src="./images/rainy.png" />');
//   }
// }

function renderWeather(weather) {

  let fahrenheit = Math.round(weather.main.temp * 9/5 + 32) + '&#176;F';
  let celsius = Math.round(weather.main.temp) + '&#176;C';
  let description = weather.weather[0].description.toUpperCase();
  // let weatherIcon = `<img id="icon" src=${icon} alt="${description}" />`;

    // add icons
    if (weather.weather[0].main == "Rain") {
      $('.icon').html('<img src="./images/rainy.png" />');
    } else if (weather.weather[0].main == "Clouds") {
      $('.icon').html('<img src="./images/cloudy.png" />');
    }

  $('.weatherResults').css("visibility", "visible");
  $('#fahrenheit').append(fahrenheit);
  $('#celsius').append(celsius);
  $('#description').append(description);
}

function clearScreen() {
  // Clear out any existing weather info if present
  $('.weatherResults').css("visibility", "hidden");
  $('#fahrenheit').empty();
  $('#celsius').empty();
  $('.icon').empty();
  $('#description').empty();
}

const howsTheWeather = function(){
  clearScreen();
  getLocation();
}
