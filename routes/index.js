var express = require('express');
var router = express.Router();

var makeAPIRequest = require('../client/js/headline.js').makeAPIRequest;

/* GET home page. */
router.get('/', function(req, res, next) {
  makeAPIRequest("Brexit", 10, 1).then(function(data){
    res.render('index', { data: data });
  });
});

router.get('/search', function(req, res, next) {
  makeAPIRequest(req.query.q, 10, 1).then(function(data){
    res.render('index', { data: data, theme: req.query.q });
  });
});

module.exports = router;
