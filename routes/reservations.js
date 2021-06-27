var express = require('express');
var router = express.Router();

/* GET reservation list page. */
router.get('/', function(req, res, next) {
  res.render('reservation/list', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
  res.render('reservation/add', { title: 'Express' });
});

router.get('/update', function(req, res, next) {
  res.render('reservation/update', { title: 'Express' });
});
module.exports = router;
