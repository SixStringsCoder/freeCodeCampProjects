// Fetch info from wikipedia summarizing search term
const getSummary = term => {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${term}`;
  fetch(url)
  .then(response => response.json())
  .then(jsonResponse => {
    console.log(jsonResponse);
  }).then(getRelated(term))
}

// Fetch info from wikipedia showing related results absed on getSummary() search term
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
