// Fetch info from wikipedia summarizing search term
const getSummary = term => {
  const cors = 'https://cors-anywhere.herokuapp.com/'
  // Test Using Wikimedia REST API
  // const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${term}`;
  // Test Using the MediaWiki API
  const search = `${cors}https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms%7Cextracts&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail%7Cname&pithumbsize=50&pilimit=10&wbptterms=description%7Clabel&gpssearch=${term}&gpslimit=10`;
  try {
    fetch(search)
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse);
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


// Click button to call getSummary function based on input's value
$('#submit').on('click', function() {
    const searchTerm = $('#input').val();
    console.log(searchTerm);
    getSummary(searchTerm);
})
