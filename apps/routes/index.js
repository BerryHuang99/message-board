var express = require('express');
var router = express.Router();

const messages = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ messages: this.messages });
});

router.post('/leaving-message', function(req, res, next) {
  messages.push({email: req.param("email"), content: req.param('content'), time: new Date()});
  res.redirect('/');
});

module.exports = router;
