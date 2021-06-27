var express = require('express');
var router = express.Router();

/* GET users list page. */
router.get('/', function(req, res, next) {
  res.render('utilisateur/list', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
  res.render('utilisateur/add', { title: 'Express' });
});

router.get('/update', function(req, res, next) {
  res.render('utilisateur/update', { title: 'Express' });
});
module.exports = router;
