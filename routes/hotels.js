var express = require('express');
var router = express.Router();

/* GET hotel list page. */
router.get('/', function(req, res, next) {
  res.render('hotel/list', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
  res.render('hotel/add', { title: 'Express' });
});

router.get('/update', function(req, res, next) {
  res.render('hotel/update', { title: 'Express' });
});

module.exports = router;
