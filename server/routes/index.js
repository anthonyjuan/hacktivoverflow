let routes = require('express').Router();

routes.get('/', function(req, res) {
  res.send('waddup dude')
})

module.exports = routes;