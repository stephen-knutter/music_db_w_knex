var express = require('express');
var router = express.Router();

var environment = 'development';
var config = require('../knexfile')[environment];
var knex = require('knex')(config);


/* GET home page. */
router.get('/', function(req, res, next) {
  knex('track').then(function(data){
    res.render('index', {'title': 'Hey', 'data': data });
  })

});

module.exports = router;
