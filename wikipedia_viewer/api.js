// Fetch info from wikipedia summarizing search term
const getSummary = term => {
  // Test Using Wikimedia REST API
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${term}`;
  // Test Using the MediaWiki API
  // const search = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail&pithumbsize=50&pilimit=10&wbptterms=description&gpssearch=${term}&gpslimit=10`;
  const search = `https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages%7Cpageterms%7Cextracts&generator=prefixsearch&redirects=1&formatversion=2&piprop=thumbnail%7Cname&pithumbsize=50&pilimit=10&wbptterms=description%7Clabel&gpssearch=${term}&gpslimit=10`;

  fetch(search)
  .then(response => response.json())
  .then(jsonResponse => {
    console.log(jsonResponse);
  }).then(getRelated(term))
}

// Fetch info from wikipedia showing related results based on getSummary() search term
const getRelated = term => {
  const url = `https://en.wikipedia.org/api/rest_v1/page/related/${term}`;
  fetch(url)
  .then(response => response.json())
  .then(jsonResponse => {
    console.log(jsonResponse)
  })
}

// Test call
getSummary("guitar");
