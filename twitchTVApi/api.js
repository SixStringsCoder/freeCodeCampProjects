const x = document.getElementById("main");

// Spinning Icon while waiting for JSON call
// const waitIcon = () => {
//   $('#waitIcon').css("visibility", "visible");
//   console.log("Wait Icon!!")
// }

const twitchApi = function() {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://wind-bow.gomix.me/twitch-api/streams/';
  const summary = 'summary';
  const featured = 'featured';
  // const gameSearch = '?game=Overwatch';
  const urlToFetch = `${cors}${url}${featured}`;

  return fetch(urlToFetch)
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse);
      let tvGuide = jsonResponse;
    });
}

twitchApi();

// function renderWeather(weather) {
//   $('#waitIcon').css('visibility', 'hidden');
//   let fahrenheit = Math.round(weather.main.temp * 9/5 + 32) + '&#176;F';
//   let celsius = Math.round(weather.main.temp) + '&#176;C';
//   let description = weather.weather[0].description.toUpperCase();
//   const windDir = weather.wind.deg;
//   let windText = '';
//   let windSpeed = weather.wind.speed;
//   const windIcon = '<img src="./images/wind.png" />';
//
//   // add weather icons
//   if (weather.weather[0].main === "Rain" || weather.weather[0].main === "Drizzle") {
//     $('.icon').html('<img src="./images/rainy.png" />');
//   } else if (weather.weather[0].main === "Clouds") {
//     $('.icon').html('<img src="./images/cloudy.png" />');
//   } else if (weather.weather[0].main === "Snow") {
//     $('.icon').html('<img src="./images/snowy.png" />');
//   } else if (weather.weather[0].main === "Sun") {
//     $('.icon').html('<img src="./images/sunny.png" />');
//   }
//
//   // Determine wind direction text
//   if (windDir <= 78.75 && windDir >= 11.25) {
//     windText = 'NE';
//   } else if (windDir <= 101.25) {
//     windText = 'E';
//   } else if (windDir <= 191.25) {
//     windText = 'S';
//   } else if (windDir <= 258.75) {
//     windText = 'SW';
//   } else if (windDir <= 281.25) {
//     windText = 'W';
//   } else if (windDir < 348.75) {
//     windText = 'NW';
//   } else if (windDir > 348.75 || windDir < 11.25) {
//     windText = 'N';
//   }
//
//   // Append to DOM
//   $('.weatherResults').css("visibility", "visible");
//   $('#fahrenheit').append(fahrenheit);
//   $('#celsius').append(celsius);
//   $('#description').append(description);
//   $('#wind').append(`${windSpeed} mph winds ${windIcon} from the ${windText}`);
// }
//
// function clearScreen() {
//   // Clear out any existing weather info if present
//   $('#waitIcon').css("visibility", "hidden");
//   $('.weatherResults').css("visibility", "hidden");
//   $('#fahrenheit').empty();
//   $('#celsius').empty();
//   $('.icon').empty();
//   $('#description').empty();
//   $('#wind').empty();
// }
//
// // Button is clicked to start the program
// const howsTheWeather = function(){
//   clearScreen();
//   getLocation();
// }
