var request = require('supertest');
var makeAPIRequest = require('../client/js/headline.js').makeAPIRequest;

describe('loading express', function () {
  var server;
  beforeEach(function () {
    server = require('../routes/index');
  });

  it('gets /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(200, done);
      done();
  });

  it('calls API call', function testSlash(done) {
    request(server)
      .get('/')
      .expect(makeAPIRequest)
      .expect(200, done);
      done();
  });

  it('renders index', function testSlash(done) {
    request(server)
      .get('/')
      .expect('<div class="o-grid-container">')
      .expect('<div class="o-grid-container">')
      .expect('<h2 class="o-teaser__heading">')
      .expect('<p class="o-teaser__standfirst">')
      .expect('<div class="o-grid-row">', done);
      done();
  });

  it('gets /search', function testSlash(done) {
    request(server)
      .get('/search?q=Brexit')
      .expect(200, done);
      done();
  });

  it('calls API call', function testSlash(done) {
    request(server)
      .get('/search?q=Brexit')
      .expect(makeAPIRequest)
      .expect(200, done);
      done();
  });

  it('uses request params', function testSlash(done) {
    request(server)
      .get('/search?q=Brexit')
      .expect('q=Brexit', done);
      done();
  });

  it('renders index', function testSlash(done) {
    request(server)
      .get('/search?q=Brexit')
      .expect('<div class="o-grid-container">')
      .expect('<div class="o-grid-container">')
      .expect('<h2 class="o-teaser__heading">')
      .expect('<p class="o-teaser__standfirst">')
      .expect('<div class="o-grid-row">', done);
      done();
  });

  it('gets /', function testSlash(done) {
    request(server)
      .get('/')
      .expect(pageNumber, 1)
    done();
  });
});
