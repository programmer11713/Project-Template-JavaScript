var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Addin About Page
router.get('/about', (req, res) => {
  res.json({message: 'Welcome to the About Page'});
});

module.exports = router;