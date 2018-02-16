// Fetch info from wikipedia summarizing search term
const getSummary = term => {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const wikiUrl = 'https://en.wikipedia.org';

  // Fetch JSON using the MediaWiki API
  const search = `${cors}${wikiUrl}/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms%7Cimageinfo%7Cextracts%7Cimages&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail%7Cname&pithumbsize=150&pilimit=10&wbptterms=description%7Clabel&exsentences=2&exlimit=3&exintro=1&explaintext=1&exsectionformat=plain&gpssearch=${term}&gpslimit=10`;
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

// Fetch JSON using REST API from wikipedia showing related results based on getSummary() search term
// const getRelated = term => {
//   const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${term}`;
//   fetch(url)
//   .then(response => response.json())
//   .then(jsonResponse2 => {
//     console.log(jsonResponse2)
//   })
// }

const renderDetails = (response) => {
  $('#searchResults').empty();

  const results = response.query.pages;
  results.map((result, index) => {
    let title = results[index].title.replace(/\s+/g, '_'); // replaces spaces with underscore so that weblink works
    let learnLink = `https://en.wikipedia.org/wiki/${title}`;
    let image = results[index].thumbnail ? results[index].thumbnail.source : "./images/no-image.jpg";
    let extract = results[index].extract ? results[index].extract : "No further extract available";
    let text = results[index].terms.description ? results[index].terms.description[0] : results[index].terms.label[0];
    let article = `
    <article class="result">
      <h3 class="resultTitle">${results[index].title}</h3>
      <div><img class="resultImage" src=${image} alt=${results[index].title} /></div>
      <p class="resultText"><span>Summary:</span> ${text}; ${extract}</p>
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
