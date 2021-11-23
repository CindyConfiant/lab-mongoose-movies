const express = require('express');

const router  = express.Router()
const Movie = require('../models/Movie.model')
const Celebrity = require('../models/Celebrity.model')


/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;