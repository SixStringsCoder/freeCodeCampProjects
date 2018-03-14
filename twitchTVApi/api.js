const x = document.getElementById("main");

// Spinning Icon while waiting for JSON call
// const waitIcon = () => {
//   $('#waitIcon').css("visibility", "visible");
//   console.log("Wait Icon!!")
// }



const twitchApi = function() {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://wind-bow.gomix.me/twitch-api/streams/';
  const users = 'https://wind-bow.glitch.me/twitch-api/users/';
  const summary = 'summary';
  const featured = 'featured';
  const user = "freecodecamp";
  const urlToFetch = `${cors}${url}${featured}`;

  return fetch(urlToFetch)
    .then(response => response.json())
    .then(jsonResponse => {
      let tvGuide = jsonResponse.featured;
      console.log(jsonResponse);
      renderTvGuide(tvGuide);
    });
}


function renderTvGuide(channels) {
  console.log(channels);
  channels.map(entry => {

    let channelRow =
      `<section class="channel">
        <div>
          <div class="topInfo">
            <img class="logo" src=${entry.stream.channel.logo} alt="logo" />
            <h3 class="gameName">${entry.stream.game}</h3>
            <p class="followers">followers: ${entry.stream.channel.followers}</p>
          </div>

          <img class="icon" src=${entry.image} />
          <div class="description">
            ${entry.text}
          </div>

          <a class="viewChannelBtn" href=${entry.stream.channel.url} target="_blank"><button>View Channel</button></a>
        </div>
      </section>`;

    main.innerHTML += channelRow;
  });
  return channels;
}

twitchApi();

  // Append to DOM
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
