const x = document.getElementById("main");

// Spinning Icon while waiting for JSON call
// const waitIcon = () => {
//   $('#waitIcon').css("visibility", "visible");
//   console.log("Wait Icon!!")
// }


/*=========================================================
              Show Channel based on Search term
=========================================================*/
$('#submitBtn').on('click', function(event) {
    event.preventDefault();
    let searchTerm = $('#searchField').val();
    console.log(searchTerm)
    searchTwitch(searchTerm);
});

const searchTwitch = function(channel) {
  // $('.channel').empty();
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const users = 'https://wind-bow.glitch.me/twitch-api/users/';
  const urlToFetch2 = `${cors}${users}${channel}`;

  return fetch(urlToFetch2)
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse);
      renderSearch(jsonResponse);
    });
}

function renderSearch(channel) {
    let url = `https://www.twitch.tv/${channel.name}`;
    let channelRow =
      `<section class="channel">
        <div>
          <div class="topInfo">
            <img class="logo" src=${channel.logo} alt="logo" />
            <h3 class="gameName">${channel.display_name}</h3>
          </div>
          <div class="description">
            ${channel.bio}
          </div>

          <a class="viewChannelBtn" href=${url} target="_blank"><button>View Channel</button></a>
        </div>
      </section>`;

    main.innerHTML += channelRow;
}


/*=========================================================
              Show Featured Channels on TwitchTV
=========================================================*/
$('#featuredStreams').on('click', function(event) {
    event.preventDefault();
    console.log("featuredStreams fired")
    twitchApiFeatured();
});


const twitchApiFeatured = function() {
  // $('.channel').empty();
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const url = 'https://wind-bow.gomix.me/twitch-api/streams/';
  const featured = 'featured';
  const urlToFetch = `${cors}${url}${featured}`;

  return fetch(urlToFetch)
    .then(response => response.json())
    .then(jsonResponse => {
      let tvGuide = jsonResponse.featured;
      // console.log(jsonResponse);
      renderTvGuide(tvGuide);
    });
}


function renderTvGuide(channels) {
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

// twitchApiFeatured();
