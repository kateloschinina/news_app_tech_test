var express = require('express');
var router = express.Router();
var search = "Brexit";
var pageNumber = 1;
var resPerPage = 12;

var makeAPIRequest = require('../client/js/headline.js').makeAPIRequest;

/* GET home page. */
router.get('/', function(req, res, next) {
  pageNumber = 1;
  makeAPIRequest(search, resPerPage, pageNumber).then(function(data){
    res.render('index', { data: data, theme: search, page: pageNumber, res: resPerPage });
  });
});

router.get('/search', function(req, res, next) {
  search = req.query.q;
  pageNumber = (req.query.page) ? parseInt(req.query.page) : 1;
  makeAPIRequest(search, resPerPage, pageNumber).then(function(data){
    res.render('index', { data: data, theme: search, page: pageNumber, res: resPerPage });
  });
});

module.exports = router;
