var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', userName: req.session.userName});
});

router.get('/login', function(req, res, next) {
  res.render('login');
})

router.get('/joke', function(req, res, next) {
  req.session.jc+1;
  console.log(req.session.jc);
  res.render('joke', {jokes: jokes.getRandomJoke});  
});

router.get('/jokes', function(req, res, next) {

  res.render('jokes', {jokes: jokes.allJokes});
  req.session.jokesCounter+1;
  
});

router.get('/addjoke', function(req, res, next) {
  res.render('addjokes', {jokes: jokes.allJokes});
});

router.post('/storejoke', function (req, res) {
  
  jokes.addJoke(req.body.joke);
  res.redirect('/addjoke');
  req.session.storeJokes+1;
});

module.exports = router;
