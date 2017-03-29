var assert = require('assert');
var makeAPIRequest = require('../client/js/headline.js').makeAPIRequest;

describe('How API works', function() {
  describe('#makeAPIRequest', function() {
    it('returns an array of items of requested length', function(done){
      makeAPIRequest("Brexit", 10, 1).then(function(data){
        assert.equal(data.length, 10);
        done();
      });
    });
    it('items have title', function(done){
      makeAPIRequest("Brexit", 1, 1).then(function(data){
        assert.equal(typeof(data[0].title.title), "string");
        done();
      });
    });
    it('items have summary', function(done){
      makeAPIRequest("Brexit", 1, 1).then(function(data){
        assert.equal(typeof(data[0].summary.excerpt), "string");
        done();
      });
    });
  });
});
