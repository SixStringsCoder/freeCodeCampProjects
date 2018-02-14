// Fetch info from wikipedia summarizing search term
const getSummary = term => {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const wikiUrl = 'https://en.wikipedia.org';
  // Test Using Wikimedia REST API
  // const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${term}`;
  // Test Using the MediaWiki API
  const search = `${cors}${wikiUrl}/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms%7Cextracts&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail%7Cname&pithumbsize=150&pilimit=10&wbptterms=description%7Clabel&exsentences=2&gpssearch=${term}&gpslimit=10`;
  try {
    fetch(search)
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse);
      renderDetails(jsonResponse);
    })
  } catch(error) {
    console.error(error);
  }
}

// Fetch info from wikipedia showing related results based on getSummary() search term
// const getRelated = term => {
//   const url = `https://en.wikipedia.org/api/rest_v1/page/related/${term}`;
//   fetch(url)
//   .then(response => response.json())
//   .then(jsonResponse => {
//     console.log(jsonResponse)
//   })
// }

const renderDetails = (response) => {
  $('#searchResults').empty();

  const results = response.query.pages;
  results.map((result, index) => {
    let title = results[index].title.replace(/\s+/g, '_'); // replaces spaces with underscore so that weblink works
    let learnLink = `https://en.wikipedia.org/wiki/${title}`;
    let image = results[index].thumbnail ? results[index].thumbnail.source : "No Image Available";
    let extract = results[index].extract ? results[index].extract : "No extract available";
    let text = results[index].terms.description ? results[index].terms.description[0] : results[index].terms.label[0];
    let article = `
    <article class="result">
      <h3 class="resultTitle">${results[index].title}</h3>
      <div><img class="resultImage" src=${image} alt=${results[index].title} /></div>
      <p class="resultText"><span>Summary:</span> ${text}</p>
      <a class="learn" href=${learnLink} target="_blank">Learn More</a>
    </article>`;
    $('#searchResults').append(article);
  });
}



// Click button to call getSummary function with input's value as the argument
$('#btn').on('click', function(event) {
    event.preventDefault();
    const searchTerm = $('#term').val();
    console.log(searchTerm);
    getSummary(searchTerm);
    $('#term').reset();
});
