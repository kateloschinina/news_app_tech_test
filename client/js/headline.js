var request = require('request-promise');

function makeAPIRequest(query, resultsPerPage, pageNumber){
  return new Promise(function(resolve, reject) {
    options = {
      uri: 'http://api.ft.com/content/search/v1?apiKey=fqm6ejv37wdsvrejhz7cefwz',
      json: true,
      method: 'POST',
      body: {
        "queryString": query,
    	  "queryContext" : {
          "curations" : [ "ARTICLES"]
        },
        "resultContext" : {
          "aspects": [
            "title",
            "summary",
            "location",
            "lifecycle",
            "editorial"
          ],
          "maxResults": resultsPerPage,
          "offset" : (pageNumber - 1)*resultsPerPage
        }
      }
    };
    request(options, function (error, response, body) {
        if (error) {
          return console.error('error while loading APIs:', err);
        }
        resolve(body.results[0].results);
      });
  })
}

makeAPIRequest("Brexit", 2, 1).then(function(data) {
  console.log(data[0]);
})

module.exports = {
  makeAPIRequest
}
