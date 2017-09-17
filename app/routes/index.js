var express = require('express');
var router = express.Router();

const messages = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ messages: messages });
});

router.post('/leaving-message', function(req, res, next) {
  var message = {
    email: req.param("email"), 
    content: req.param('content'), 
    time: new Date()};
    
  messages.push(message);
  res.redirect('/');
});

module.exports = router;
