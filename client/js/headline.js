var request = require('request');

request({
  uri: 'http://api.ft.com/content/search/v1?apiKey=fqm6ejv37wdsvrejhz7cefwz',
  json: true,
  method: 'POST',
  // contentType: 'application/json',
  body: {
    "queryString": "Brexit"
  }
}, function (error, response, body) {
      console.log('body:', body.results[0].results[10]); // Print the HTML for the Google homepage.
  });
